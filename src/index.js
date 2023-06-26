import User from './js/ageCalculator.js'


const form = document.querySelector('form#ageInput');


form.addEventListener('submit', function(event) {
  event.preventDefault();


  const currentAgeInput = document.querySelector('#current-age');
  const previousAgeInput = document.querySelector('#previous-age');
  const futureAgeInput = document.querySelector('#future-age');
  
  const currentAge = parseFloat(currentAgeInput.value);
  const previousAge = parseFloat(previousAgeInput.value);
  const futureAge = parseFloat(futureAgeInput.value);


  const user = new User(currentAge, previousAge, futureAge);


  const mercuryAge = user.calculator('Mercury');
  const venusAge = user.calculator('Venus');
  const marsAge = user.calculator('Mars');
  const jupiterAge = user.calculator('Jupiter');


  document.querySelector('p#mercury-age').textContent = `You are ${mercuryAge} years old on Mercury!`;
  document.querySelector('p#venus-age').textContent = `You are ${venusAge} years old on Venus!`;
  document.querySelector('p#mars-age').textContent = `You are ${marsAge} years old on Mars!`;
  document.querySelector('p#jupiter-age').textContent = `You are ${jupiterAge} years old on Jupiter!`;


  const mercuryYearsPassed = user.calculateYearsPassed('Mercury');
  const venusYearsPassed = user.calculateYearsPassed('Venus');
  const marsYearsPassed = user.calculateYearsPassed('Mars');
  const jupiterYearsPassed = user.calculateYearsPassed('Jupiter');


  document.querySelector('p#mercury-years-passed').textContent = `Years passed on Mercury: ${mercuryYearsPassed}`;
  document.querySelector('p#venus-years-passed').textContent = `Years passed on Venus: ${venusYearsPassed}`;
  document.querySelector('p#mars-years-passed').textContent = `Years passed on Mars: ${marsYearsPassed}`;
  document.querySelector('p#jupiter-years-passed').textContent = `Years passed on Jupiter: ${jupiterYearsPassed}`;


 const mercuryYearsUntil = user.calculateYearsUntil('Mercury');
 const venusYearsUntil = user.calculateYearsUntil('Venus');
 const marsYearsUntil = user.calculateYearsUntil('Mars');
 const jupiterYearsUntil = user.calculateYearsUntil('Jupiter');


 document.querySelector('p#mercury-years-until').textContent = `It has been: ${mercuryYearsUntil} Mercury Years since your year ${previousAge} birthday`;
 document.querySelector('p#venus-years-until').textContent = `It has been: ${venusYearsUntil} Venus Years since your year ${previousAge} birthday`;
 document.querySelector('p#mars-years-until').textContent = `It has been: ${marsYearsUntil} Mars Years since your year ${previousAge} birthday`;
 document.querySelector('p#jupiter-years-until').textContent = `It has been: ${jupiterYearsUntil} Jupiter Years since your year ${previousAge} birthday`;

  document.querySelector('div#planets').style.display = 'block';
});
