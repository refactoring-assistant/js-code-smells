bloaters = ["Long Method", "Large Class", "Primitive Obsession", "Long Parameter List", "Data Clumps"]
object_orientation_abusers = ["Alternative Classes with Different Interfaces", "Refused Bequest", "Switch Statements", "Temporary Field"]
change_preventers = ["Divergent Change", "Parallel Inheritance Hierarchies", "Shotgun Surgery"]
dispensables = ["Comments", "Duplicate Code", "Data Class", "Dead Code", "Lazy Class", "Speculative Generality"]
couplers = ["Feature Envy", "Inappropriate Intimacy", "Incomplete Library Class", "Message Chains", "Middle Man"]

all_code_smells = {
    "Bloaters": bloaters,
    "Object-Orientation Abusers": object_orientation_abusers,
    "Change Preventers": change_preventers,
    "Dispensables": dispensables,
    "Couplers": couplers
}
