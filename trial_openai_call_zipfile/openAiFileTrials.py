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
openai_model = "gpt-4o"

list_code_smells = code_smells()
currDir = os.getcwd()


def chat_completion(zip_file_path = "badcode.zip"): 
    temp_dir = os.path.join(currDir, "extractedFiles/")
    code_snippets = extractJStoString(zip_file_path, temp_dir, False)
    completion = client.chat.completions.create(
    model=openai_model,
    messages=[
        {"role": "system", "content": '''You are a teaching assistant for the course foundations of software engineering. 
        You view javascript code submissions and give back reviews to the students in a particular format using markdown.
        
        Detect among the following code smells = {smell_list}
        
        This is the format of the report=
        Code Review:
        - Code smell no. -
        - Code smell name -
        - Code smell description -
        - Found in line no. -
        - Possible solution -'''
        .format(smell_list=list_code_smells)},
        {"role": "user", "content": '''Generate a code review report 
         based on the following code snippets:\n {trial_code}.\n 
         Find the line number in reference to the directory name mentioned at the top of each code. 
         Give either a range of line numbers or individual line numbers.
         '''.format(trial_code=code_snippets)},
    ]
    )

    text_complete_message = completion.choices[0].message.content

    with open("FinalOutput.md", "w") as text_file:
        text_file.write(text_complete_message)
    print("Added code review in FinalOutput.md")
    deleteExtractedFiles(temp_dir)
    
    
if __name__ == "__main__":
    # zipFilePath = "badcode.zip"
    zipFilePath = input("Enter the zip file path: ")
    chat_completion(zip_file_path = zipFilePath)