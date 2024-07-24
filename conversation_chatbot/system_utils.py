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

def save_file_name_format(model_name, zipFilePath):
    try:   
        current_datetime = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        base_name = os.path.basename(zipFilePath)
        zipfilename = os.path.splitext(base_name)[0]
        save_file = "FinalOutput_{zipfile}_continue_{model}_{current_datetime}.md".format(zipfile = zipfilename, 
                                                                                            model=model_name, current_datetime = current_datetime)
        return save_file
    except Exception as e:
        print(f"An error occurred in saving file name: {e}")
        return ""

def save_output(output_dir, save_file, response):
    try:
        save_path = os.path.join(output_dir, save_file)
        with open(save_path, "w") as text_file:
            text_file.write(response)
        print("Added code review in {save_path}".format(save_path=save_path))
        return True
    except Exception as e:
        print(f"An error occurred in saving response: {e}")
        return False