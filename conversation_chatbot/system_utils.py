import os
from datetime import datetime
def make_dir(output_dir):
    try:
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
            print(f"Directory {output_dir} created.".format(output_dir=output_dir))
        else:
            print(f"Directory {output_dir} already exists.".format(output_dir=output_dir))
    except OSError:
        print(f"Creation of the directory {output_dir} failed.".format(output_dir=output_dir))

def save_file_name_format(model_name, zipFilePath, additional_info):
    try:   
        current_datetime = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        base_name = os.path.basename(zipFilePath)
        zipfilename = os.path.splitext(base_name)[0]
        save_file = "FinalOutput_{zipfile}_continue_{model}_{additional_info}_{current_datetime}.md".format(
            zipfile = zipfilename, model=model_name, additional_info = additional_info, current_datetime = current_datetime)
        return save_file
    except Exception as e:
        print(f"An error occurred in saving file name: {e}")
        print("Aborting process...")
        return ""

def save_output(output_dir, save_file, response):
    try:
        if response == "":
            print("Response is empty. Nothing to save.")
            return False
        save_path = os.path.join(output_dir, save_file)
        with open(save_path, "w") as text_file:
            text_file.write(response)
        print("Added code review in {save_path}".format(save_path=save_path))
        return True
    except Exception as e:
        print(f"An error occurred in saving response: {e}")
        return False
    
def extract_single_file(file_path):
    try:
        if not file_path.endswith(".js"):
            print("File is not a javascript file. Please upload a javascript file.")
            return ""
        with open(file_path, 'r') as f:
            content = f.read()
        return content
    except Exception as e:
        print(f"An error occurred in extracting file: {e}")
        return ""