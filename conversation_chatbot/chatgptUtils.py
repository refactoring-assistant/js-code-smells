import os
import tiktoken

encoding = tiktoken.encoding_for_model("gpt-4o")

def calculate_tokens(message):
    tokens = []
    tokens += encoding.encode(message)
    total_tokens = len(tokens)
    # total_tokens = sum([len(message['content'].split()) for message in conversation_history])
    return total_tokens

# read a mark down folder and return the content of the files
def read_markdown_folder(folder_path):
    content = ''
    with open(folder_path, 'r') as f:
        content += f.read()
    return content

if __name__ == '__main__':
    # Define the path to the folder containing the markdown files
    folder_path = os.path.join(os.getcwd(), "FinalOutput_nancy_examples_continue_gpt-4o_2024-07-18_22-40-07.md")
    # Read the content of the markdown files
    content = read_markdown_folder(folder_path)
    conv_history =[{"role": "user", "content": content}]
    print(calculate_tokens(conv_history))