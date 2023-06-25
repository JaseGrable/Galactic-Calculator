export default class User {
    constructor(age, previousAge, futureAge) {
        this.age = age;
        this.previousAge = previousAge;   
        this.futureAge = futureAge;
}

//Age calculator for Mercury, Venus, Mars, Jupiter 
calculator(planet) {
    let mercuryAge;
    let venusAge;
    let marsAge;
    let jupiterAge;
  
    switch (planet) {
      case "Mercury":
        mercuryAge = parseFloat((this.age / 0.24).toFixed(2));
        return mercuryAge;
      case "Venus":
        venusAge = parseFloat((this.age/.62).toFixed(2));
        return venusAge;
      case "Mars":
        marsAge = parseFloat((this.age/1.88).toFixed(2))
        return marsAge;
      case "Jupiter":
        jupiterAge = parseFloat((this.age/11.86).toFixed(2))
        return jupiterAge;
      default:
        return 'Invalid Planet';
    }
}

calculateYearsPassed(planet) {
    let earthYears = this.age - this.previousAge;
    let mercuryYearsPassed;
    let venusYearsPassed;
    let marsYearsPassed;
    let jupiterYearsPassed;

    switch (planet) {
      case 'Earth':
        return earthYears;
      case 'Mercury':
        mercuryYearsPassed = parseFloat((earthYears / 0.24).toFixed(2));
        return mercuryYearsPassed;
      case 'Venus':
        venusYearsPassed = parseFloat((earthYears / 0.62).toFixed(2));
        return venusYearsPassed;
      case 'Mars':
        marsYearsPassed = parseFloat((earthYears / 1.88).toFixed(2));
        return marsYearsPassed;
      case 'Jupiter':
      jupiterYearsPassed = parseFloat((earthYears / 11.86).toFixed(2));
        return jupiterYearsPassed
      default:
        return 'Invalid Planet';
    }
  }

calculateYearsUntil(planet) {
    let earthYearsUntil 

    switch (planet) {
        case 'Earth':
            return earthYearsUntil;
    }
}
}