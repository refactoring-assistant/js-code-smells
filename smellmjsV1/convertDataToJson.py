import os
import json
from zipExtract import extractZip, deleteExtractedFiles
from trialMsg import code_trial
from systemMsg import system_message

file_extensions = [".js", ".md", ".txt"]

def get_zipfile_query(extracted_code):
    return '''View this submission and generate a code review report 
         based on the following code snippets:\n {trial_code}.\n 
         Use the line number beside the code as a reference to point out the code smells.
         
         '''.format(trial_code=extracted_code)

def convertDataToJson(zipFilePath, temp_dir = "extractedFiles/", save_to_file = False):
    train_arr = []
    extractZip(zipFilePath, temp_dir)
    for root, dirs, files in os.walk(temp_dir):
        if(len(files) == 0):
            continue
        code_json_arr = []
        code_json_arr.append(system_message())
        for filename in files:
            code_json = {}
            code_snippets = ""
            directory = os.path.basename(root)
            print('''\nDirectory: {directory} -- Filename: {file}\n\n'''.format(directory=directory, file=filename))
            code_snippets += '''\nDirectory: {directory} -- Filename: {file}\n\n'''.format(directory=os.path.basename(root), file=filename)
            code_snippets += code_trial(os.path.join(root, filename))
            code_snippets += "\n--------------------------------------------------------------------------------------------\n"
            
            if filename.endswith(".js"):
                code_json["role"] = "user"
                user_query = get_zipfile_query(code_snippets)
            elif filename.endswith(".txt") or filename.endswith(".md"):
                code_json["role"] = "assistant"
                user_query = code_snippets
                
            code_json["content"] = user_query
            print(code_json["role"])
            code_json_arr.append(code_json)
            # print(len(code_json_arr))
            
        for dicts in code_json_arr:
            if dicts["role"] == "user":
                user_content = dicts
            elif dicts["role"] == "assistant":
                assistant_content = dicts
            elif dicts["role"] == "system":
                system_content = dicts
                
        code_json_arr[0] = system_content
        code_json_arr[1] = user_content
        code_json_arr[2] = assistant_content
        train_arr.append({"messages": code_json_arr})
    if save_to_file:            
        with open(zipFilePath[:-4] + ".jsonl", "w") as f:
            for data in train_arr:
                f.write(json.dumps(data) + '\n')
    print("Successfully saved data to jsonl format")
    # return code_snippets
            
if __name__ == "__main__":
    zipFilePath = input("Enter the zip file path: ")
    currDir = os.getcwd()
    temp_dir = os.path.join(currDir, "extractedFiles/")
    convertDataToJson(zipFilePath, temp_dir, True)
    input("Press Enter to delete the extracted files")
    deleteExtractedFiles(temp_dir)
    print("Extracted files deleted successfully")