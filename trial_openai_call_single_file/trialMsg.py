# Putting code to be fed to chatgpt for single file.
# Pass in the file name to be read.
def code_trial(code_to_be_read = "trialcodepass.js"):
    with open(code_to_be_read, "r") as f:
        code = f.read()
        return code
    
if __name__ == "__main__":
    print(code_trial(code_to_be_read = "trialcodepass.js"))
