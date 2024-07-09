import os
import openai
from dotenv import load_dotenv
from datetime import datetime
from code_smells import all_code_smells
from embeddings.code_smell_embeddings import get_example_files

load_dotenv()

openai.api_key = os.getenv('OPENAI_API_KEY')
GPT_model = "gpt-4"
PROGRAMMING_LANGUAGE = "JavaScript"

def print_welcome():
    print("")
    print("Welcome to the Code Smell Example Generator!")
    print("This tool helps you generate multiple examples of a specified code smell.")
    print("")

    list_code_smells()
    print("")

def list_code_smells():
    print("")
    print("\nAvailable Code Smells:")
    for category, smells in all_code_smells.items():
        print("")
        print(f"\n{category}:")
        for smell in smells:
            print("")
            print(f" - {smell}")
    
    print("")
    print("\nBulk Create Examples For All Code Smells:")
    print(" - all")

def get_user_input(prompt):
    user_input = input(prompt).strip()
    if user_input.lower() in ["exit", "quit"]:
        print("")
        print("Goodbye!")
        exit()
    return user_input

def validate_num_examples():
    while True:
        num_examples_str = get_user_input("Enter the number of examples to generate: ")
        if num_examples_str.isdigit() and int(num_examples_str) > 0:
            return int(num_examples_str)
        else:
            print("Please enter a valid positive integer.")

def normalize_code_smell_input(input_smell):
    return input_smell.strip().lower().replace(" ", "-").replace("_", "-")

def get_code_smell_category(input_smell):
    if input_smell.lower() == "all":
        return "all"
    title_cased_smell = input_smell.strip().title()
    for category, smells in all_code_smells.items():
        if title_cased_smell in smells:
            return category
    return None

def get_code_smell_and_category():
    while True:
        user_input_smell = get_user_input("\nPlease enter the name of the code smell you want to generate examples for: ")
        category = get_code_smell_category(user_input_smell)

        if not category:
            print("")
            print(f"Invalid code smell name: {user_input_smell}. Please try again.")
        else:
            if category == "all":
                return "all", "all"
            normalized_smell = normalize_code_smell_input(user_input_smell)
            normalized_category = normalize_code_smell_input(category)
            return normalized_smell, normalized_category

def get_example_files_path(user_input_smell):
    while True:
        directory_path = get_user_input(f"Please enter the path to the directory containing code examples of the '{user_input_smell}' code smell (or press Enter to skip): ")
        print("")
        if directory_path == "":
            return None
        elif os.path.isdir(directory_path):
            example_files = get_example_files(directory_path)
            if example_files:
                return example_files
            else:
                print(f"No example files found in directory: {directory_path}. Please try again.")
        else:
            print(f"Invalid directory path: {directory_path}. Please try again.")

def read_example_files(example_paths):
    if example_paths is None:
        return ""
    examples_text = ""
    for path in example_paths:
        with open(path, 'r') as file:
            examples_text += f"\n~~~{PROGRAMMING_LANGUAGE.lower()}\n{file.read()}\n~~~\n"
    return examples_text


def create_prompt(code_smell, num_examples, examples_text):
    if examples_text:
        reference_section = f"\nFor reference, here is some example code for the code smell:\n\n{examples_text}\n"
    else:
        reference_section = "\n"

    return [
        {"role": "system", "content": "You are a skilled assistant specialized in generating examples of code smells in programming code."},
        {"role": "user", "content": f"""
            Generate {num_examples} unique JavaScript examples that clearly illustrate the following code smell: {code_smell}. 
            Each example should contain only the specified code smell of interest and no other code smells. The examples should 
            be concise, self-contained, and focused on demonstrating the code smell of interest.

            Do not include any headers, comments, or preamble before or after the code smell examples. Generate only the code 
            smell examples, which should follow this format:

            ~~~{PROGRAMMING_LANGUAGE.lower()}
            // AI-generated code smell for {code_smell.title()}
            <code_snippet>
            ~~~

            Ensure the examples do not include any explanations or additional text beyond the code snippet itself. 
            Your entire output should begin and end with ~~~

            Code smell of interest: {code_smell}
            {reference_section}
            
            Ensure the examples are varied and showcase different ways the code smell can manifest in {PROGRAMMING_LANGUAGE} code.
            """
        }
    ]

def normalize_code_smell_examples(raw_examples):
    examples = []
    for example in raw_examples:
        example = example.strip().replace("~~~", "").strip()
        if example and "AI-generated code smell for" in example:
            code_snippet = example.split('\n')
            clean_code = []
            for line in code_snippet:
                if line.startswith('// AI-generated code smell for') or line.strip().startswith('}'):
                    clean_code.append(line)
                elif not line.startswith('//'):
                    clean_code.append(line)
                else:
                    break
            examples.append('\n'.join(clean_code))
    return examples

def generate_bulk_examples(num_examples):
    for category, smells in all_code_smells.items():
        normalized_category = normalize_code_smell_input(category)
        for smell in smells:
            normalized_smell = normalize_code_smell_input(smell)
            print("")
            print(f"\nGenerating {num_examples} examples of the '{normalized_smell}' code smell...")

            # Skip example files path retrieval for bulk creation
            examples_text = ""
            examples = generate_code_smell_examples(normalized_smell, num_examples, examples_text)
            save_examples(examples, normalized_category, normalized_smell)


def generate_code_smell_examples(code_smell, num_examples, examples_text):
    messages = create_prompt(code_smell, num_examples, examples_text)

    completion = openai.chat.completions.create(
        model=GPT_model,
        messages=messages
    )

    raw_examples = completion.choices[0].message.content.split(f'~~~{PROGRAMMING_LANGUAGE.lower()}')
    return normalize_code_smell_examples(raw_examples)

def save_examples(examples, category, smell):
    output_dir = f"outputs/{category}/{smell}"
    os.makedirs(output_dir, exist_ok=True)
    for i, example in enumerate(examples):
        if example.strip():
            example = example.replace("~~~", "").strip()
            timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
            output_file = f"{output_dir}/{smell}-example-{timestamp}-{i + 1}-bad.js"
            with open(output_file, 'w') as f:
                f.write(example)
            print(f"Example {i + 1} saved to {output_file}")

def chat_with_assistant(conversation):
    def handle_user_input(user_input):
        if user_input.lower() in ["exit", "quit"]:
            print("")
            print("Goodbye!")
            return False
        if user_input.lower() == "more":
            print("")
            main()
            return False
        
        conversation.append({"role": "user", "content": user_input})
        
        response = openai.chat.completions.create(
            model=GPT_model,
            messages=conversation
        )

        assistant_response = response.choices[0].message.content
        print("")
        print(f"\nAssistant: {assistant_response}\n")
        
        conversation.append({"role": "assistant", "content": assistant_response})
        return True
    
    print("")
    print("\nYou can now ask clarifying questions about the generated examples.")
    print("Type 'more' to generate more code smell examples.")
    print("Type 'exit' or 'quit' to end the chat.")
    
    while True:
        print("")
        user_input = input("You: ")
        if not handle_user_input(user_input):
            break

def main():
    print_welcome()

    normalized_smell, normalized_category = get_code_smell_and_category()
    num_examples = validate_num_examples()

    if normalized_smell == 'all':
        generate_bulk_examples(num_examples)
    else:
        example_files = get_example_files_path(normalized_smell)
        if example_files is None:
            example_files = []

    print("")
    print(f"\nGenerating {num_examples} examples of the '{normalized_smell}' code smell...")

    examples_text = read_example_files(example_files)
    examples = generate_code_smell_examples(normalized_smell, num_examples, examples_text)
    save_examples(examples, normalized_category, normalized_smell)

    conversation = [
        {"role": "system", "content": "You are a helpful assistant skilled in explaining code smells and programming concepts."},
        {"role": "assistant", "content": "I have generated the requested code smell examples. How can I assist you further?"}
    ]
    chat_with_assistant(conversation)

if __name__ == '__main__':
    main()
