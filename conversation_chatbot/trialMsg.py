# Putting code to be fed to chatgpt for single file.
def code_trial(code_to_be_read="trialcodepass.js"):
    with open(code_to_be_read, "r") as file:
        lines_with_numbers = [(f"( line {line_number}) {line}" if code_to_be_read.endswith(".js") else line)
                              for line_number, line in enumerate(file, start=1)]
        final_code = "".join(lines_with_numbers)
        return final_code

if __name__ == "__main__":
    # print(code_trial(code_to_be_read="training_bad_code/data-clumps/data-clumps1-bad-report.md"))
    print(code_trial(code_to_be_read = "trialcodepass.js"))
# def code_trial(code_to_be_read = "trialcodepass.js"):
#     with open(code_to_be_read, "r") as file:
#         if code_to_be_read.endswith(".js"):
#             lines_with_numbers = ["( line {line_number}) {code}".format(line_number = line_number, code = line) 
#                                 for line_number, line in enumerate(file, start=1)]
#         else:
#             lines_with_numbers = ["{code}".format(code = line) 
#                                 for line in enumerate(file, start=1)]
#         final_code = "".join(lines_with_numbers)
#         return final_code
        # code = f.read()
        # return code
    
# if __name__ == "__main__":
#     print(code_trial(code_to_be_read = "trialcodepass.js"))
