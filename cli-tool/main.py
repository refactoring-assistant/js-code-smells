from openai import OpenAI
import json
import os
from dotenv import load_dotenv
from code_smells import all_code_smells

load_dotenv()

key = os.getenv('OPENAI_API_KEY')
client = OpenAI(api_key=key)

def analyze_code_snippet(code_snippet):
    messages = [
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
        """}
    ]

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )

    return completion.choices[0].message['content']

with open('code_snippet.js', 'r') as file:
    code_snippet = file.read()

result = analyze_code_snippet(code_snippet)

with open('code_analysis.md', 'w') as md_file:
    md_file.write(result)
