from code_smells_list import code_smells

list_code_smells = code_smells()

extracted_user_code = ""
user_query_code_smell = ""

system_roles = {
    "default": {"role": "system", "content": '''You are a teaching assistant for 
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
        
        Generate a report for every file that you see. If a file does not have any code smells,
        then mention the file looks good to you with no code smells. At the end of the report
        add the number of files processed to generate the report.
        
        If you are not asked to generate a report, answer the question normally to the user.
        '''.format(smell_list=list_code_smells)
    },
    "each_code_smell": {"role": "system", "content": '''You are a teaching assistant for 
        the course foundations of software engineering. The user will ask you to view a submission
        for a given code smell and generate report consisting of instances of the code smell in the code.
        There may be multiple files submitted, so see if each smell has the associated code smell and generate
        a report for the relevant file accordingly. Give back the report to the user in markdown format.
    
        The possible solution should be a brief description of how to fix the code smell.
        Do not regenerate code.
        
        This is the format of the report=
        Code Review:
        - Code smell no. -
        - Code smell name -
        - Code smell description -
        - Found in line no. -
        - Possible solution -
        
        If a file does not have the mentioned code smell, you need not give out any information about it.
        At the end of the report add the number of files processed to generate the report.
        
        If you are not asked to generate a report, answer the question normally to the user.
        '''
    }
}

user_roles = {
    "default" : '''View this submission and generate a code review report.
         Use the line number beside the code as a reference to point out the code smells.
         No need to give me any example code. Just highlight the related method or class 
         name and the line number. Arrange the code smell numbering based on priority of 
         which code smell is more important to fix first.
         Ensure that the filename for each file is included in the report.
         
         The following is the code snippet:\n
         ''',
    "each_code_smell": '''View this submission and generate a code review report for the given code smell.
    Use the line number beside the code as a reference to point out the code smells.
    No need to give me any example code. Just highlight the related method or class 
    name and the line number. Ensure that the filename for each file is included in the report.
    The following is the code snippet:\n
    '''
}




def system_message(type_of_message):
    try:
        return system_roles[type_of_message]
    except Exception as e:
        print("Invalid args, returning default message")   
        return system_roles["default"]
    
def get_user_query(type_of_message, extracted_code, user_code_smell):
    global extracted_user_code, user_query_code_smell
    user_query_code_smell = user_code_smell
    extracted_user_code = extracted_code
    msg = user_roles[type_of_message]
    msg += extracted_code
    if(type_of_message == "each_code_smell"):
        msg += f"\nCode smell: {user_code_smell}"
    return msg
         

def endline_break():
    return "\n--------------------------------------------------------------------------------------------\n"
    