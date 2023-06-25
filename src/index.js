import User from './js/ageCalculator.js'

// Get the form element
const form = document.querySelector('form#ageInput');

// Attach event listener to the form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the age input values
  const currentAgeInput = document.querySelector('#current-age');
  const previousAgeInput = document.querySelector('#previous-age');
  const futureAgeInput = document.querySelector('#future-age');
  
  const currentAge = parseFloat(currentAgeInput.value);
  const previousAge = parseFloat(previousAgeInput.value);
  const futureAge = parseFloat(futureAgeInput.value);

  // Create a new User instance
  const user = new User(currentAge, previousAge, futureAge);

  // Get planet age
  const mercuryAge = user.calculator('Mercury');
  const venusAge = user.calculator('Venus');
  const marsAge = user.calculator('Mars');
  const jupiterAge = user.calculator('Jupiter');

  // Set the planet age text
  document.querySelector('p#mercury-age').textContent = `You are ${mercuryAge} years old on Mercury!`;
  document.querySelector('p#venus-age').textContent = `You are ${venusAge} years old on Venus!`;
  document.querySelector('p#mars-age').textContent = `You are ${marsAge} years old on Mars!`;
  document.querySelector('p#jupiter-age').textContent = `You are ${jupiterAge} years old on Jupiter!`;



  // Show the planets div
  document.querySelector('div#planets').style.display = 'block';
});
