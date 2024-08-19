# importing the zipfile module 
import shutil 
from zipfile import ZipFile 

def extractZip(zipPath, extractPath):
    with ZipFile(zipPath, 'r') as zObject: 
        zObject.extractall(path=extractPath)
    print("\nExtracted to {temp} folder.\n".format(temp=extractPath))
        
def deleteExtractedFiles(extractPath):
    shutil.rmtree(extractPath) 
    print("\nDeleted {temp} folder.\n".format(temp=extractPath))


if __name__ == "__main__":
    zipPath = "badcode.zip"
    extractPath = "extractedFiles/"
    finalPath = "extractedFiles/badcode/"
    extractZip(zipPath, extractPath)
    input("Press Enter to delete the extracted files")
    deleteExtractedFiles(extractPath)
    print("Extracted files deleted successfully")