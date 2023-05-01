window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
const loanAmountInput = document.querySelector('#loan-amount');
const yearsInput = document.querySelector('#loan-years');
const rateInput = document.querySelector('#loan-rate');
loanAmountInput.value = "0"
yearsInput.value = "0"
rateInput.value = "0"
calculateMonthlyPayment();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
getCurrentUIValues();
updateMonthly();

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    // Get input values as an object
  const uiValues = getCurrentUIValues();

    // Grab values from object
  let princple = uiValues.amount;
  let interst = uiValues.rate / 12 / 100;
  let n = -(uiValues.years * 12); //Create N negative
  
  //Calculating Monthy Payments
  const monthlyPMT = (princple * interst) / (1 - (1 + interst)**n);
  return monthlyPMT.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
newMonthlyPMT = document.querySelector('#monthly-payment')
newMonthlyPMT.innerText = calculateMonthlyPayment();
}
