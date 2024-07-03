let calculation = localStorage.getItem('calculation') || '';
/* if (!calculation) {
  calculation = "";
} */

displayCalculation();

function updateCalculation(number) {
  calculation += number;
  console.log(calculation);
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation;
}