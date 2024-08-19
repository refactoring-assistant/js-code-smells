const isValidPassword = (password) => {
  const length = password.length;
  const hasSpecialCharacter = /[!@#$%^&*]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);

  return length >= 8 && hasSpecialCharacter && hasUpperCase && hasLowerCase && hasDigit;
};

console.log(isValidPassword("Example1$"));