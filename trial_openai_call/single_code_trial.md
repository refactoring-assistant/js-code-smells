# OpenAI API Trial

## Set up:

### Setting up virtual environment (Optional but recommended):
Create a virtual python environment. The following is the code to be entered in the terminal:

```bash
python -m venv </path/to/new/virtual/environment>
```

Under "/Scripts" folder, activate the virtual environment based on your system.

For windows:
```bash
cd </path/to/new/virtual/environment>/Scripts
activate
```

This should activate the virtual environment in your system.

### Install requirements:

To install the requirements, run the following command:
```bash
pip install -r requirements.txt
```

This should install the required packages to run the program.

### Set up environment:

Create a .env file in the folder where you will run the program. In the .env file, add the OpenAI API key in the following format: 
```
OPENAI_API_KEY=<The API key>
```

### Run the program using default config:
To run the program using the default files, just enter the following in the terminal:

```bash
python openAiTrial.py
```

This should generate a file Output.md and store ChatGPT's response in it.


## Note
1. The code is currently set to use the _gpt-4o_ model. It can be changed in openAiTrial.py
2. Any list of code smells can be manually added to the list in code_smells_list.py
3. To replace the code file to be sent to ChatGPT, replace the file name in openAiTrial.py
4. This is a zero-shot learning trial on a single code file, solving using zip files to be added in upcoming commits.