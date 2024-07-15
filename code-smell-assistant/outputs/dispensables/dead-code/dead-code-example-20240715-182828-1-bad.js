// AI-generated code smell for Dead-Code
function myFunction() {
    let x = 3;
    x = 4; // dead-code: x is declared and immediately re-declared without being used
  
    var flag = false;
    if (flag = true) { // dead-code: assignment within condition
      return x * 2;
    }
  
    return x; // dead-code: unreachable code after return
}