# List of code smells to be used in the code review report.
code_smells_list = [
    {
        "Bloaters": ["Long Method", "Primitive Obsession", "Long Parameter List", "Data Clumps", "Large Class"]
    },
    {
        "Object-Orientation Abusers": ["Switch Statements", "Temporary Field", "Refused Bequest", "Alternative Classes with Different Interfaces"]
    },
    {
        "Change Preventers": ["Divergent Change", "Shotgun Surgery", "Parallel Inheritance Hierarchies"]
    },
    {
        "Dispensables": ["Lazy Class", "Data Class", "Duplicate Code", "Speculative Generality", "Dead Code", "Comments"]
    },
    {
        "Couplers": ["Feature Envy", "Inappropriate Intimacy", "Message Chains", "Middle Man", "Incomplete Library Class"]
    }
    ]

def code_smells():
    return code_smells_list


if __name__ == '__main__':
    print(code_smells())