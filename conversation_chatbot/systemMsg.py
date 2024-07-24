from code_smells_list import code_smells

list_code_smells = code_smells()
def system_message():
    return {"role": "system", "content": '''You are a teaching assistant for 
        the course foundations of software engineering. When asked to view a submission,
        you view javascript code submissions find the code smells related to each code file,
        and give back reviews to the students in a particular format using markdown for each file. 
        The returned report needs to be in markdown format.
        
        Detect among the following code smells = {smell_list}
        Long methods code smell only exists if the method has more than 30 lines of code.
        The possible solution should be a brief description of how to fix the code smell.
        Do not regenerate code.
        
        This is the format of the report=
        Code Review:
        - Code smell no. -
        - Code smell name -
        - Code smell description -
        - Found in line no. -
        - Possible solution -
        
        If you are not asked to generate a report, answer the question normally to the user.
        '''.format(smell_list=list_code_smells)
    }
    
def get_user_query(extracted_code):
    return '''View this submission and generate a code review report 
         based on the following code snippets:\n {trial_code}.\n 
         Use the line number beside the code as a reference to point out the code smells.
         No need to give me any example code. Just highlight the related method or class 
         name and the line number. Arrange the code smell numbering based on priority of 
         which code smell is more important to fix first.
         Ensure that the filename for each file is included in the report.
         '''.format(trial_code=extracted_code)

def endline_break():
    return "\n--------------------------------------------------------------------------------------------\n"
    