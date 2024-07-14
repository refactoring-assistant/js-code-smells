# Single code file report generation code.
import os
from decouple import config
from openai import OpenAI
# from trialMsg import code_trial
from code_smells_list import code_smells
from parseZipJS import extractJStoString
from zipExtract import deleteExtractedFiles

OPENAI_API_KEY = config("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)
# openai_model = "gpt-4o"
openai_model = "ft:gpt-3.5-turbo-0125:joysopenailab::9iWwIYRO"
model_name = openai_model.split(":")[-1]

list_code_smells = code_smells()
currDir = os.getcwd()


# Initialize the conversation with a system message
conversation_history = [
    {"role": "system", "content": '''You are a teaching assistant for 
        the course foundations of software engineering. When asked to view a submission,
        you view javascript code submissions find the code smells in the each code file,
        and give back reviews to the students in a particular format using markdown. The
        returned report should be in markdown format.
        
        Detect among the following code smells = {smell_list}
        Long methods code smell only exists if the method has more than 30 lines of code.
        
        This is the format of the report=
        Code Review:
        - Code smell no. -
        - Code smell name -
        - Code smell description -
        - Found in line no. -
        - Possible solution -
        
        Otherwise you just answer the questions asked by the user. Do not generate a 
        report unless asked by the user.
        '''.format(smell_list=list_code_smells)
    },
]

def manage_context(conversation_history, max_tokens=128000):
    # Calculate the total tokens
    total_tokens = sum([len(message['content'].split()) for message in conversation_history])
    
    # If total tokens exceed max tokens, truncate the conversation history
    while total_tokens > max_tokens:
        conversation_history.pop(1)  # Remove the oldest user message and assistant response
        total_tokens = sum([len(message['content'].split()) for message in conversation_history])
    
    return conversation_history


def get_response(user_query):
    global conversation_history
    # Add user input to the conversation history
    conversation_history.append({"role": "user", "content": user_query})
    conversation_history = manage_context(conversation_history)
    # Call the OpenAI API to get the response
    completion = client.chat.completions.create(
    model=openai_model,
    messages=conversation_history
    )

    # Extract the assistant's response
    assistant_response = completion.choices[0].message.content

    # Add the assistant's response to the conversation history
    conversation_history.append({"role": "assistant", "content": assistant_response})

    return assistant_response





def extract_zipfile(zip_file_path = "badcode.zip"): 
    temp_dir = os.path.join(currDir, "extractedFiles/")
    code_snippets = extractJStoString(zip_file_path, temp_dir, False)
    deleteExtractedFiles(temp_dir)
    return code_snippets

def get_zipfile_query(extracted_code):
    return '''View this submission and generate a code review report 
         based on the following code snippets:\n {trial_code}.\n 
         Use the line number beside the code as a reference to point out the code smells.
         
         '''.format(trial_code=extracted_code)
    
    
if __name__ == "__main__":
    while True:
        user_input = input("Choose among the following options:\n1. Submit zip file\n2. Ask chatbot a question\n3. Exit the program\nYou: ")
        match user_input:
            case "1":
                try:
                    zipFilePath = input("Enter the zip file path: ")
                    extracted_codes = extract_zipfile(zip_file_path = zipFilePath)
                    user_query = get_zipfile_query(extracted_codes)
                    response = get_response(user_query)
                    save_file = "FinalOutput-{zipfile}-continue-{model}.md".format(zipfile = zipFilePath[:-4], model=model_name)
                    with open(save_file, "w") as text_file:
                        text_file.write(response)
                    print("Added code review in {save_file}".format(zipfile = zipFilePath[:-4], save_file=save_file))
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
                print("Exiting the program...")
                break
            case _:
                print("Invalid choice. Please try again.")