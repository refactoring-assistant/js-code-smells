// AI Generated Long Method Example 3
function checkInputs(form) {
  const usernameInput = form.elements['username'];
  const passwordInput = form.elements['password'];
  const confirmPasswordInput = form.elements['confirm-password'];

  if (usernameInput.value === '') {
    alert('Please enter a username');
    return false;
  } else if (usernameInput.value.length < 3) {
    alert('Username must be at least 3 characters');
    return false;
  } else if (/[^a-zA-Z0-9]/.test(usernameInput.value)) {
    alert('Username can only contain letters and numbers');
    return false;
  }
  
  if (passwordInput.value === '') {
    alert('Please enter a password');
    return false;
  } else if (passwordInput.value.length < 8) {
    alert('Password must be at least 8 characters');
    return false;
  } else if (/[^a-zA-Z0-9]/.test(passwordInput.value)) {
    alert('Password can only contain letters and numbers');
    return false;
  }
  
  if (confirmPasswordInput.value !== passwordInput.value) {
    alert('Passwords do not match');
    return false;
  }

  return true;
}