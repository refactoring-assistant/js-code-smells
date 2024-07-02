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

## Set Python version

```bash
python3.11 -m venv openai-env
source openai-env/bin/activate
```

## Run Program

```bash
python generate
```
