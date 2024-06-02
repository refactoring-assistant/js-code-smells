# Single code file report generation code.
from decouple import config
from openai import OpenAI
from trialMsg import code_trial
from code_smells_list import code_smells

# Save the key in a .env file
OPENAI_API_KEY = config("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)
openai_model = "gpt-4o"

list_code_smells = code_smells()
code_to_be_read = "trialcodepass.js"
trial_code = code_trial(code_to_be_read)


completion = client.chat.completions.create(
  model=openai_model,
  messages=[
    {"role": "system", "content": '''You are a teaching assistant for the course foundations of software engineering. 
     You view javascript code submissions and give back reviews to the students in a particular format using markdown.
     
     Detect among the following code smells = {smell_list}
     
     This is the format of the report=
     Code Review:
     - Code smell no. -
     - Code smell name -
     - Code smell description -
     - Found in line no. -
     - Possible solution -'''
     .format(smell_list=list_code_smells)},
    {"role": "user", "content": '''Generate a code review report for the following code snippet: {trial_code}'''.format(trial_code=trial_code)},
  ]
)

text_complete_message = completion.choices[0].message.content
print("Added code review in Output.md")

with open("Output.md", "w") as text_file:
    text_file.write(text_complete_message)