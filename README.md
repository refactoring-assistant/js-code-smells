# SmeLLM.js

## About The Tool :
This is a tool developed to enable code smell detection in JavaScript (JS) based files. A user can submit a zipped folder or a file during conversation for evaluation for code smells. After this, they can interact with the chatbot regarding the generated report.

The underlying model is ChatGPT with system prompts developed for teaching assistants of a software engineering course.

The report is generated in markdown format.

<strong>Note :</strong> This tool requires you to have your own OpenAPI key.

## How To Use :
Go to the folder smellmjsV1. Install the required packages using -

``` bash
pip install -r requirements.txt
``` 

In the same folder, create a .env file containing your OpenAPI key. Save the key as :
```
OPENAI_API_KEY = <your_openapi_key>
```

Now, in the same folder, run the program smellmjs.py
``` bash
python3 smellmjs.py
```

This should run the program as intended in default mode. Intially it will ask to choose a model. It is recommended to go for the first choice -
```
1. gpt-4o - (Context window = 128000 Tokens)
```

Following this it will ask you to create a folder to save the generated output reports. Enter the path where you want to create the folder.

Then the main menu options will show up. 

*Option 1* allows the user to submit a path to the zipped folder for evaluation and report generation.

*Option 2* allows the user to converse with the chatbot. It also enables the user to upload a single file.

*Option 3* allows the user to refresh context so that they can converse with the chatbot with the conversation reset to intial settings.

*Option 4* allows the user to switch models which also switches context.

*Option 5* allows the user to exit the program.

<strong>Note :</strong> There is an experimental feature to generate report according to each code smell. To enable it, when you write the command to start the program, add the argument - *each_code_smell*

``` bash
python3 smellmjs.py each_code_smell
```


## Code Smells Detected By The Assistant :

| Bloaters              | Object-Orientation   Abusers                    | Change   Preventers                | Dispensables             | Couplers                   |
|-----------------------|-------------------------------------------------|------------------------------------|--------------------------|----------------------------|
| Long Method           | Switch Statements                               | Divergent Change                   | Lazy Class               | Feature Envy               |
| Primitive   Obsession | Temporary Field                                 | Shotgun Surgery                    | Data Class               | Inappropriate   Intimacy   |
| Long Parameter   List | Refused Bequest                                 | Parallel Inheritance   Hierarchies | Duplicate Code           | Message Chains             |
| Data Clumps           | Alternative Classes   with Different Interfaces |                                    | Speculative   Generality | Middle Man                 |
| Large Class           |                                                 |                                    | Dead Code                | Incomplete Library   Class |
|                       |                                                 |                                    | Comments                 |                            |
|                       |                                                 |                                    |                          |                            |


## Miscellaneous
To try out the program, you can use the zipped folder *badcode.zip* or the file *trialcodepass.js* as inputs to the program depending on the option. 