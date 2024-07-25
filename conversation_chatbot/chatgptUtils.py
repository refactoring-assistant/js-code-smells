import os
import tiktoken

from chatgpt_models_list import chatgpt_models
from constants import USER_PROMPT

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

def manage_context(conversation_history, max_tokens):
    # Calculate the total tokens
    total_tokens = sum([calculate_tokens(message['content']) for message in conversation_history])
    # If total tokens exceed max tokens, truncate the conversation history
    while total_tokens > max_tokens:
        conversation_history.pop(1)  # Remove the oldest user message and assistant response
        total_tokens = sum([calculate_tokens(message['content']) for message in conversation_history])
    
    return conversation_history

def choose_model():
    print("Choose among the following models:")
    models_list = chatgpt_models()
    num_models = len(models_list)
    while True:
        for i in range(num_models):
            print("{i}. {model} - (Context window = {input_token_limit} Tokens)".format(
                i=i+1, model=models_list[i]["model"], input_token_limit = models_list[i]["input_token_limit"]))
        try:
            model_index = int(input(USER_PROMPT))
        except ValueError:
            print("Invalid input. Please enter a number.")
            continue
        if model_index < 1 or model_index > num_models:
            print("Invalid model choice. Enter again.")
            continue
        context_window_limit = models_list[model_index - 1]["input_token_limit"]
        return {"model": models_list[model_index - 1]["model"], "context_window_limit": context_window_limit}

if __name__ == '__main__':
    # Define the path to the folder containing the markdown files
    folder_path = os.path.join(os.getcwd(), "FinalOutput_nancy_examples_continue_gpt-4o_2024-07-18_22-40-07.md")
    # Read the content of the markdown files
    content = read_markdown_folder(folder_path)
    conv_history =[{"role": "user", "content": content}]
    print(calculate_tokens(conv_history))