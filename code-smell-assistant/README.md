# Code Smell Example Generator

## Purpose
This code smell generator is designed to generate multiple examples of specified code smells. The tool uses OpenAI's GPT-4 to create a variety of examples based on existing code samples.

## Setup
### Prerequisites
- Python 3.11.4+

### Create and Activate Virtual Environment
```bash
python3.11 -m venv openai-env
source openai-env/bin/activate  # On Windows, use `openai-env\Scripts\activate`
```

### Install Dependencies
```bash
pip install -r requirements.txt
```

## Usage

### Running the Tool

```bash
python generate.py
```

#### Follow the prompts:
- Enter the **name of the code smell** you want to generate examples for.
- Enter the **number of examples** to generate.
- Provide the **path to the directory containing the example code** files.

#### Example Session
```bash
$ python generate.py

Welcome to the Code Smell Example Generator!
This tool helps you generate multiple examples of a specified code smell.

Available Code Smells:
### code smell list printed here

Please enter the name of the code smell: Long Method
Enter the number of examples to generate: 3
Please enter the path to the directory containing the example code files: /path/to/examples

Generating 3 examples of the 'Long Method' code smell...
Example 1 saved to outputs/long-method-example-20230715-123456-1-bad.js
Example 2 saved to outputs/long-method-example-20230715-123456-2-bad.js
Example 3 saved to outputs/long-method-example-20230715-123456-3-bad.js

You can now ask clarifying questions about the generated examples.
Type 'more' to generate more code smell examples.
Type 'exit' or 'quit' to end the chat.

You: quit

Goodbye!
```

#### Generating More Examples
While in the interactive session, type _more_ to generate additional examples.

#### Chat Feature
You can interact with the assistant to ask clarifying questions about the generated examples. 

#### Terminating the Session
Type _exit_ or _quit_ to end the session.