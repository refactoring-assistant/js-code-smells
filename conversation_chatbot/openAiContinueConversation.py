import os
import sys
from decouple import config
from openai import OpenAI
from fine_tuning_trials.code_smells_list import code_smells
from parseZipJS import extractJStoString
from zipExtract import deleteExtractedFiles
from chatgptUtils import calculate_tokens, manage_context, choose_model
from system_utils import make_dir, save_file_name_format, save_output, extract_single_file
from systemMsg import system_message, get_user_query, endline_break
from constants import USER_PROMPT

OPENAI_API_KEY = config("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)


openai_model = ""
model_name = ""
context_window_limit = 4096
extraction_type = ""

list_code_smells = code_smells()
currDir = os.getcwd()
output_dir = os.path.join(currDir, "chatgpt_outputs")
extract_endline = endline_break()

# Initialize the conversation with a system message
conversation_history = []     
system_role = system_message("default")
system_message_type = ""
user_code_smell = "all"


def get_response(user_query, save_user_response = False):
    global conversation_history
    # Add user input to the conversation history
    send_conv_history = conversation_history.copy()
    send_conv_history.append({"role": "user", "content": user_query})
    send_conv_history = manage_context(send_conv_history, context_window_limit)
    if save_user_response:
        conversation_history.append({"role": "user", "content": user_query})
    # conversation_history = manage_context(conversation_history)
    # Call the OpenAI API to get the response
    completion = client.chat.completions.create(
    model=openai_model,
    messages=send_conv_history
    )

    # Extract the assistant's response
    assistant_response = completion.choices[0].message.content
    # print(calculate_tokens(assistant_response))

    # Add the assistant's response to the conversation history
    conversation_history.append({"role": "assistant", "content": assistant_response})

    return assistant_response


def extract_zipfile(zip_file_path = "badcode.zip"): 
    temp_dir = os.path.join(currDir, "extractedFiles/")
    code_snippets = extractJStoString(zip_file_path, temp_dir, False)
    deleteExtractedFiles(temp_dir)
    return code_snippets
         
       
def get_all_extract_response(extracted_codes):
    print("All extract response processing...")
    print("Code Smell: ", user_code_smell)
    user_query = get_user_query(system_message_type, extracted_codes, user_code_smell)
    return get_response(user_query, False)
  
def get_file_extract_response(extracted_codes):
    print("File extract response processing...")
    all_code_list = extracted_codes.split(extract_endline)
    filtered_code_list = [s for s in all_code_list if s.strip() != ""]
    response = ""
    for code in filtered_code_list:
        user_query = get_user_query(system_message_type, code, user_code_smell)
        response += get_response(user_query, False)
    return response

def get_directory_extract_response(extracted_codes):
    print("Directory based extraction is not implemented yet.")
    return ""


extract_functions = [
    {"get_all_extract_response": get_all_extract_response},
    {"get_file_extract_response": get_file_extract_response},
    {"get_directory_extract_response": get_directory_extract_response}
]

def save_response(response, zipFilePath, additional_info = ""):
    save_file = save_file_name_format(model_name, zipFilePath, additional_info)
    if save_file == "":
        return False
    print(output_dir)
    return save_output(output_dir, save_file, response)

def conversation_extract_single_file():
   while True:
        file_path = input("Input the file path to upload or enter '###' to escape: ")
        if file_path == "###":
            print("Returning to the previous menu...")
            return ""
        extracted_code = extract_single_file(file_path)
        if(extracted_code == ""):
            print("File extraction failed. Please try again.")
            continue
        user_input = get_user_query(system_message_type, extracted_code, user_code_smell)
        return user_input

def zip_all_smells_together(zipFilePath ,extracted_codes):
    total_tokens = calculate_tokens(extracted_codes)
    print("The total number of tokens in the extracted code is: ", total_tokens)
    while True:
        user_input = input("Choose among the following options:\n1. Sent all code snippets at once\n" +
                           "2. Send code snippets one by one\n" +
                           "3. Send code snippets based on directory\n" +
                           "4. Go back to the previous menu.\n" +
                           USER_PROMPT)
        response = ""
        match user_input:
            case "1" | "2" | "3":
                extract_function_dict = extract_functions[int(user_input) - 1]
                extract_function_key = list(extract_function_dict.keys())[0]
                extraction_function = extract_function_dict[extract_function_key]
                response = extraction_function(extracted_codes)
                if(save_response(response, zipFilePath, extract_function_key)):
                    break
            case "4": 
                print("Going back to the previous menu...")
                break
            case _:
                print("Invalid choice. Please try again.")

def individual_code_smell(zipFilePath, extracted_codes):
    global user_code_smell
    for code_smell_type in list_code_smells:
        response = ""
        code_smell_type_list = list(code_smell_type.values())[0]
        for code_smell in code_smell_type_list:
            global output_dir
            
            user_code_smell = code_smell
            response += get_all_extract_response(extracted_codes)
            code_smell = code_smell.replace(" ", "_")
            output_dir = os.path.join(currDir, "chatgpt_outputs")
            output_dir = os.path.join(output_dir, code_smell)
            save_response(response, zipFilePath, code_smell)
                
    
    
def zipfileChoice():
    zipFilePath = input("Enter the zip file path: ")
    extracted_codes = extract_zipfile(zip_file_path = zipFilePath)
    
    match system_message_type:
        case "default":
            zip_all_smells_together(zipFilePath, extracted_codes)
        case "each_code_smell":
            individual_code_smell(zipFilePath, extracted_codes)
    
                
def user_chatbot_conversation():
    while True:
        save_user_response = True
        print("Type '###' to get back the initial menu or type '--file' to upload a file")
        user_input = input(USER_PROMPT)
        if user_input.strip().lower() == "###":
            print("Returning to the main menu...")
            break
        elif user_input.strip().lower() == ("--file"):
            user_input = conversation_extract_single_file()
            if user_input == "":
                print("No file uploaded/Empty file uploaded.")
                continue
        response = get_response(user_input, save_user_response)
        print(f"Assistant: {response}")

def model_choice_command():
    global openai_model, model_name, context_window_limit
    choose_model_response = choose_model()
    openai_model = choose_model_response["model"]
    context_window_limit = choose_model_response["context_window_limit"]
    model_name = openai_model.split(":")[-1]
    print("Currently using {chatgpt_model} model."
          .format(chatgpt_model=model_name))

def set_conversation_choice(system_role, refresh_context = False):
    global conversation_history
    if refresh_context: print("Refreshing context...")
    conversation_history = [system_role,]

    
if __name__ == "__main__":
    print("Sys args", sys.argv)
    if len(sys.argv) == 1: system_message_type = "default"
    if len(sys.argv) > 2: print("Invalid number of arguments. Using default system message.")
    if len(sys.argv) == 2: system_message_type = sys.argv[1]
    print(system_message_type)
    system_role = system_message(system_message_type)
    set_conversation_choice(system_role)

    print("Welcome to the code smell detection chatbot!")
    model_choice_command()
    if system_message_type == "each_code_smell":
        for code_smell_type in list_code_smells:
            code_smell_type_list = list(code_smell_type.values())[0]
            for code_smell in code_smell_type_list:
                code_smell = code_smell.replace(" ", "_")
                output_dir = os.path.join(currDir, "chatgpt_outputs")
                output_dir = os.path.join(output_dir, code_smell)
                make_dir(output_dir)
    else :
        make_dir(output_dir)
    while True:
        user_input = input("Choose among the following options:\n" +
                           "1. Submit zip file\n" +
                           "2. Ask chatbot a question\n" +
                           "3. Refresh conversation\n" +
                           "4. Switch chatbot models (also refreshes conversation)\n" +
                           "5. Exit the program\n" +
                           USER_PROMPT)
        match user_input:
            case "1":
                try:
                    zipfileChoice()
                except Exception as e:
                    print(f"An error occurred: {e}")
            case "2":
                try:
                    user_chatbot_conversation()
                except Exception as e:
                    print(f"An error occurred: {e}")
            case "3":
                set_conversation_choice(system_role, True)
            case "4":
                print("Switching model...")
                model_choice_command()
                set_conversation_choice(system_role, True)
            case "5":
                print("Exiting the program...")
                break
            case _:
                print("Invalid choice. Please try again.")