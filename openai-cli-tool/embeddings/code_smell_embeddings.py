import os

# Define the base directories for each code smell category
base_dirs = {
    "bloaters": "../bloaters",
    "dispensables": "../dispensables",
}

def get_example_files(category, code_smell):
    """Get all JavaScript files in a specific category and code smell directory ending with '-bad.js'."""
    example_files = []
    category_dir = base_dirs[category]
    code_smell_dir = os.path.join(category_dir, code_smell.lower().replace(" ", "-"))
    for root, _, files in os.walk(code_smell_dir):
        for file in files:
            if file.endswith('-bad.js'):
                example_files.append(os.path.join(root, file))
    return example_files
