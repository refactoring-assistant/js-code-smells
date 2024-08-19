import os

def get_example_files(directory):
    example_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('-bad.js'):
                example_files.append(os.path.join(root, file))
    return example_files
