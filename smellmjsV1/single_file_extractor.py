# Putting code to be fed to chatgpt for single file.
def single_file_extract(code_to_be_read="trialcodepass.js"):
    with open(code_to_be_read, "r") as file:
        lines_with_numbers = [(f"( line {line_number}) {line}" if code_to_be_read.endswith(".js") else line)
                              for line_number, line in enumerate(file, start=1)]
        final_code = "".join(lines_with_numbers)
        return final_code

if __name__ == "__main__":
    print(single_file_extract(code_to_be_read = "trialcodepass.js"))

