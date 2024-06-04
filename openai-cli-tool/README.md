## Setup Dependencies

```bash
pip install -r requirements.txt
```

## Update Program

Modify the path desired input file, containing the code snippet of interest. Update the desired output path accordingly:

```python
code_file = 'inputs/code_snippet_3.js'
output_file = 'outputs/code_analysis_3.md'
```

## Update API Key

Replace OPENAI_API_KEY with the string containing the API key.

```python
client = OpenAI(api_key=OPENAI_API_KEY)
```


## Run Program
```bash
python main.py
```