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

### Move to directory:

Shift to the directory where the main code is available.
In our case it is the following -
```bash
cd trial_openai_call_zipfile
```

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
python openAiFileTrials.py
```

This should ask you to enter the path for zipfile. The following is how it will look like -
```bash
Enter the zip file path: <Enter your zipfile path>
```

The code should automatically run by unzipping the zip file, processing the data and deleting the unzipped folder.
The final result should be available in FinalOutput.md.

_For trial, either badcode.zip or server.zip can be given as input_
```bash
Enter the zip file path: badcode.zip
```


## Note
1. The code is currently set to use the _gpt-4o_ model. It can be changed in openAiFileTrials.py
2. Any list of code smells can be manually added to the list in code_smells_list.py
3. To replace the code file to be sent to ChatGPT, replace the file name in openAiTrial.py
4. This is a zero-shot learning trial on a single code file, solving using zip files to be added in upcoming commits.
5. The line numbers may not be completely accurate but it ends up giving enough information to understand.