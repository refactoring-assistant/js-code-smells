# Single code file report generation code.
import os
from decouple import config
from openai import OpenAI
# from trialMsg import code_trial
from fine_tuning_trials.code_smells_list import code_smells
from parseZipJS import extractJStoString
from zipExtract import deleteExtractedFiles
from chatgptUtils import calculate_tokens
from system_utils import make_dir, save_file_name_format, save_output
from systemMsg import system_message, get_user_query, endline_break

OPENAI_API_KEY = config("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)
# openai_model = "gpt-4o"
# openai_model = "gpt-4o-mini"
openai_model = "ft:gpt-3.5-turbo-0125:joysopenailab::9iWwIYRO"
model_name = openai_model.split(":")[-1]

list_code_smells = code_smells()
currDir = os.getcwd()
output_dir = os.path.join(currDir, "chatgpt_outputs")
extract_endline = endline_break()

system_role = system_message()

# Initialize the conversation with a system message
conversation_history = [
    system_role,
]


def manage_context(conversation_history, max_tokens=128000):
    # Calculate the total tokens
    total_tokens = sum([calculate_tokens(message['content']) for message in conversation_history])
    # If total tokens exceed max tokens, truncate the conversation history
    while total_tokens > max_tokens:
        conversation_history.pop(1)  # Remove the oldest user message and assistant response
        total_tokens = sum([calculate_tokens(message['content']) for message in conversation_history])
    
    return conversation_history


def get_response(user_query):
    global conversation_history
    # Add user input to the conversation history
    send_conv_history = conversation_history.copy()
    send_conv_history.append({"role": "user", "content": user_query})
    send_conv_history = manage_context(send_conv_history)
    # conversation_history.append({"role": "user", "content": user_query})
    # conversation_history = manage_context(conversation_history)
    # Call the OpenAI API to get the response
    completion = client.chat.completions.create(
    model=openai_model,
    messages=send_conv_history
    )

    # Extract the assistant's response
    assistant_response = completion.choices[0].message.content
    print(calculate_tokens(assistant_response))

    # Add the assistant's response to the conversation history
    conversation_history.append({"role": "assistant", "content": assistant_response})

    return assistant_response


def extract_zipfile(zip_file_path = "badcode.zip"): 
    temp_dir = os.path.join(currDir, "extractedFiles/")
    code_snippets = extractJStoString(zip_file_path, temp_dir, False)
    deleteExtractedFiles(temp_dir)
    return code_snippets
         
         
def get_file_extract_response(extracted_codes):
    all_code_list = extracted_codes.split(extract_endline)
    filtered_code_list = [s for s in all_code_list if s.strip() != ""]
    response = ""
    for code in filtered_code_list:
        user_query = get_user_query(code)
        response += get_response(user_query)
    return response

def get_all_extract_response(extracted_codes):
    user_query = get_user_query(extracted_codes)
    return get_response(user_query)

def save_response(response, zipFilePath):
    save_file = save_file_name_format(model_name, zipFilePath)
    if save_file == "":
        return False
    return save_output(output_dir, save_file, response)
   
    
    
def zipfileChoice():
    zipFilePath = input("Enter the zip file path: ")
    extracted_codes = extract_zipfile(zip_file_path = zipFilePath)
    total_tokens = calculate_tokens(extracted_codes)
    print("The total number of tokens in the extracted code is: ", total_tokens)
    while True:
        user_input = input("Choose among the following options:\n1. Sent all code snippets at once\n" +
                           "2. Send code snippets one by one\n" +
                           "3. Send code snippets based on directory\n" +
                           "4. Go back to the previous menu.\n" +
                           "You: ")
        response = ""
        match user_input:
            case "1":
                response = get_all_extract_response(extracted_codes)
                if(save_response(response, zipFilePath)):
                    break
            case "2":
                response = get_file_extract_response(extracted_codes)
                if(save_response(response, zipFilePath)):
                    break
            case "3":
                print("Not implemented yet.")
            case "4": 
                print("Going back to the previous menu...")
                break
            case _:
                print("Invalid choice. Please try again.")

    
if __name__ == "__main__":
    print("Welcome to the code smell detection chatbot!\nCurrently using {chatgpt_model} model."
          .format(chatgpt_model=model_name))
    print(output_dir)
    make_dir(output_dir)
    while True:
        user_input = input("Choose among the following options:\n" +
                           "1. Submit zip file\n" +
                           "2. Ask chatbot a question\n" +
                           "3. Refresh conversation\n" +
                           "4. Exit the program\n" +
                           "You: ")
        match user_input:
            case "1":
                try:
                    zipfileChoice()
                except Exception as e:
                    print(f"An error occurred: {e}")
            case "2":
                while True:
                    user_input = input("You (type '###' to get back the initial menu): ")
                    if user_input.strip().lower() == "###":
                        print("Returning to the main menu...")
                        break
                    response = get_response(user_input)
                    print(f"Assistant: {response}")
            case "3":
                print("Refreshing context...")
                conversation_history = [system_role,]
            case "4":
                print("Exiting the program...")
                break
            case _:
                print("Invalid choice. Please try again.")