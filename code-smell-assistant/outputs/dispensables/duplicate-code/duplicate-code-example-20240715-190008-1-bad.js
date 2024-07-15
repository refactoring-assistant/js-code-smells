// AI-generated code smell for Duplicate-Code
function checkPositiveNumber(num1) {
  if(num1 > 0) {
    return true;
  } else {
    return false;
  }
}

function checkPositiveNumber(num2) {
  if(num2 > 0) {
    return true;
  } else {
    return false;
  }
}