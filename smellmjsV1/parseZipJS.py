import os
from zipExtract import extractZip, deleteExtractedFiles
from single_file_extractor import single_file_extract

ignore_dirs = ["tests", "node_modules"]
file_extensions = [".js"]
ignore_file_extensions = [".test.js", ".eslintrc.js"]

def extractJStoString(zipFilePath, temp_dir = "extractedFiles/", save_to_file = False, not_testing= False):
    code_snippets = ""
    extractZip(zipFilePath, temp_dir)
    for root, dirs, files in os.walk(temp_dir):
        dirs[:] = [d for d in dirs if d not in ignore_dirs]
        files[:] = [f for f in files if f.endswith('.js') and not f.endswith('.test.js') and not f.endswith('.eslintrc.js')]
        for filename in files:
            print('''\nDirectory: {directory} -- Filename: {file}\n\n'''.format(directory=os.path.basename(root), file=filename))
            code_snippets += "\n"
            if not_testing:
                code_snippets += '''Directory: {directory}'''.format(directory=os.path.basename(root))
            code_snippets += '''-- Filename: {file}\n\n'''.format(file=filename)
            code_snippets += single_file_extract(os.path.join(root, filename))
            code_snippets += "\n--------------------------------------------------------------------------------------------\n"
    
    if save_to_file:            
        with open(zipFilePath[:-4] + ".txt", "w") as f:
            f.write(code_snippets)
    print("Code snippets extracted successfully")
    return code_snippets
            
if __name__ == "__main__":
    zipFilePath = input("Enter the zip file path: ")
    currDir = os.getcwd()
    temp_dir = os.path.join(currDir, "extractedFiles/")
    code_snippets = extractJStoString(zipFilePath, temp_dir, True)
    input("Press Enter to delete the extracted files")
    deleteExtractedFiles(temp_dir)
    print("Extracted files deleted successfully")