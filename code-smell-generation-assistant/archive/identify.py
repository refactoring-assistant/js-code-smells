import os
import openai
import json
from dotenv import load_dotenv
from code_smells import all_code_smells

load_dotenv()

openai.api_key = os.getenv('OPENAI_API_KEY')
GPT_model = "gpt-4"
OUTPUT_FILE = 'outputs/code_analysis_2.md'
CODE_FILE = 'inputs/code_snippet_2.js'  # Replace with the actual path to your code file

def print_response(response):
    print(f"\nAssistant: {response}")

def analyze_code_snippet(code_snippet):
    initial_messages = [
        {"role": "system", "content": "You are a skilled assistant specialized in identifying and explaining code smells in programming code. You provide detailed analysis including line numbers, the name of the code smell, an issue summary, and feedback for rectifying the code smell."},
        {"role": "user", "content": f"""
            Analyze the following code snippet for any of the following code smells. For each identified code smell, provide the following information:

            1. **Code Smell**: Name the specific code smell.
            2. **Line Number(s)**: Indicate the line number(s) where the code smell occurs.
            3. **Issue Summary**: Briefly explain why this is a problem.
            4. **Feedback**: Provide concise feedback on how to rectify the issue.

            ### Code Smells of Interest:

            {json.dumps(all_code_smells, indent=4)}

            Here is the code snippet:

            ```javascript
            {code_snippet}
            ```

            **Response Format:**

            1. **Code Smell**: [Name of the code smell]
            - **Line Number(s)**: [Line number(s) where the code smell occurs]
            - **Issue Summary**: [Brief explanation of why this is a problem]
            - **Feedback**: [Concise feedback on how to rectify the issue]

            Analyze the provided code snippet and follow the example analysis format for the identified code smells.
            """
        }
    ]

    print("Generating feedback...")

    completion = openai.chat.completions.create(
        model=GPT_model,
        messages=initial_messages
    )

    print("Working...")

    result = completion.choices[0].message['content']

    os.makedirs('outputs', exist_ok=True)
    with open(OUTPUT_FILE, 'w') as md_file:
        md_file.write(result)
    
    print("Code review now available in code_analysis.md!")
    return initial_messages + [{"role": "assistant", "content": result}]

def chat_with_assistant(conversation):
    print("Do you have any additional questions about the code snippet?")
    while True:
        user_input = input("\nYou: ")
        if user_input.lower() in ["quit", "exit", "bye"]:
            print("\nGoodbye!")
            break
        
        conversation.append({"role": "user", "content": user_input})
        
        response = openai.chat.completions.create(
            model=GPT_model,
            messages=conversation
        )

        assistant_response = response.choices[0].message['content']
        print_response(assistant_response)
        
        conversation.append({"role": "assistant", "content": assistant_response})

def main():
    with open(CODE_FILE, 'r') as file:
        code_snippet = file.read()
    
    conversation = analyze_code_snippet(code_snippet)
    chat_with_assistant(conversation)

if __name__ == '__main__':
    main()
