function calculatePayment(principal, years, rate) {
  if (principal == null || years == null || rate == null) {
    return;
  }
  var monthlyRate = rate / 100 / 12;
  var payment = principal * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));
  var totalPayment = payment * years * 12;
  var totalInterest = totalPayment - principal;
  document.getElementById("monthlyPayment").innerHTML = payment.toFixed(2);
  document.getElementById("totalPayment").innerHTML = totalPayment.toFixed(2);
  document.getElementById("totalInterest").innerHTML = totalInterest.toFixed(2);
}