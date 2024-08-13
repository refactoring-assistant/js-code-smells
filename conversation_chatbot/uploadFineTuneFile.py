import os
from decouple import config
from openai import OpenAI


OPENAI_API_KEY = config("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)
openai_model = "gpt-4o"

file_to_upload = input("Enter jsonl file to be uploaded (with the extension jsonl): ")
# with open("training_bad_code.jsonl", "r") as f:
#     print(f.read())
client.files.create(
  file=open(file_to_upload, "rb"),
  purpose="fine-tune"
)

print("File {file} uploaded successfully".format(file=file_to_upload))


