import os
import openai
from dotenv import load_dotenv
from code_smells import all_code_smells
from embeddings.code_smell_embeddings import get_example_files

load_dotenv()

openai.api_key = os.getenv('OPENAI_API_KEY')
GPT_model = "gpt-4"

def read_example_files(example_paths):
    examples_text = ""
    for path in example_paths:
        with open(path, 'r') as file:
            examples_text += f"\n```javascript\n{file.read()}\n```\n"
    return examples_text

def create_prompt(code_smell, num_examples, examples_text):
    return [
        {"role": "system", "content": "You are a skilled assistant specialized in generating examples of code smells in programming code."},
        {"role": "user", "content": f"""
            Generate {num_examples} different examples of the following code smell: {code_smell}. Each example should be unique and clearly illustrate the specified code smell.

            ### Code Smell:

            {code_smell}

            ### Examples:

            {examples_text}

            Generate the examples in the following format:

            ```javascript
            // AI Generated Example {{index}}
            <code_snippet>
            ```
            """
        }
    ]

def generate_code_smell_examples(code_smell, num_examples, examples_text):
    messages = create_prompt(code_smell, num_examples, examples_text)

    completion = openai.ChatCompletion.create(
        model=GPT_model,
        messages=messages
    )

    return completion.choices[0].message['content']

def save_examples(examples, selected_category, selected_smell):
    examples_list = examples.split("```javascript")
    os.makedirs('outputs', exist_ok=True)
    os.makedirs(f'outputs/{selected_category}', exist_ok=True)
    
    for index, example in enumerate(examples_list):
        if example.strip():
            output_file = f'outputs/{selected_category}/{selected_smell}_example_{index + 1}.js'
            with open(output_file, 'w') as f:
                f.write("```javascript\n" + example.strip() + "\n```")
            print("")
            print(f"Example {index + 1} saved to {output_file}")

def list_code_smells():
    print("")
    print("\nAvailable Code Smells:")
    for category, smells in all_code_smells.items():
        print("")
        print(f"\n{category}:")
        for smell in smells:
            print("")
            print(f" - {smell}")

def normalize_code_smell_input(input_smell):
    return input_smell.strip().lower().replace(" ", "-").replace("_", "-")

def get_code_smell_category(input_smell):
    title_cased_smell = input_smell.strip().title()
    for category, smells in all_code_smells.items():
        if title_cased_smell in smells:
            return category
    return None

def chat_with_assistant(conversation):
    print("")
    print("\nYou can now ask clarifying questions about the generated examples.")
    print("Type 'exit' to end the chat.")
    
    while True:
        print("")
        user_input = input("You: ")
        if user_input.lower() in ["exit", "quit"]:
            print("")
            print("Goodbye!")
            break
        
        conversation.append({"role": "user", "content": user_input})
        
        response = openai.ChatCompletion.create(
            model=GPT_model,
            messages=conversation
        )

        assistant_response = response.choices[0].message['content']
        print("")
        print(f"\nAssistant: {assistant_response}\n")
        
        conversation.append({"role": "assistant", "content": assistant_response})

def main():
    print("")
    print("Welcome to the Code Smell Example Generator!")
    print("This tool helps you generate multiple examples of a specified code smell.")
    print("")
    
    list_code_smells()
    print("")

    while True:
        user_input_smell = input("\nPlease enter the name of the code smell you want to generate examples for: ")
        category = get_code_smell_category(user_input_smell)
        print(f"Code smell category: {category}")

        if not category:
            print("")
            print(f"Invalid code smell name: {user_input_smell}. Please try again.")
        else:
            normalized_smell = normalize_code_smell_input(user_input_smell)
            normalized_category = normalize_code_smell_input(category)
            print(f"Normalized code smell: {normalized_smell}")
            break

    num_examples = int(input("Enter the number of examples to generate: "))
    print("")
    print(f"\nGenerating {num_examples} examples of the '{user_input_smell}' code smell...")

    examples_text = read_example_files(get_example_files(normalized_category, normalized_smell))
    examples = generate_code_smell_examples(user_input_smell, num_examples, examples_text)
    save_examples(examples, normalized_category, normalized_smell)

    # chat for clarifying questions
    conversation = [
        {"role": "system", "content": "You are a helpful assistant skilled in explaining code smells and programming concepts."},
        {"role": "assistant", "content": "I have generated the requested code smell examples. How can I assist you further?"}
    ]
    chat_with_assistant(conversation)

if __name__ == '__main__':
    main()
