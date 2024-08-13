from decouple import config
from openai import OpenAI


OPENAI_API_KEY = config("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

client.fine_tuning.jobs.create(
  training_file="file-erRpGMnZ4KbJlniAudc6akB2", 
#   training_file="training_bad_code.jsonl",
  model="gpt-3.5-turbo",
  hyperparameters={
    "n_epochs":5
  }
)

print(client.fine_tuning.jobs.list(limit=10))

# id='ftjob-RHFgzqCnPTvmSWa1odkAUQxj