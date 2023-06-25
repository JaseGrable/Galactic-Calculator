export default class User {
    constructor(age, previousAge) {
        this.age = age;
        this.previousAge = previousAge;   
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
        return false;
    }
}

// earthYearsPassed() {
//     let earthYears = this.age - this.previousAge;
//     return earthYears;
// }
// mercuryYearsPassed() {
//     let mercuryYears = parseFloat((this.earthYearsPassed()/.24).toFixed(2))
//     return mercuryYears 
// }
// venusYearsPassed() {
//     let venusYears = parseFloat((this.earthYearsPassed()/.62).toFixed(2))
//     return venusYears 
// }
// marsYearsPassed() {
//     let marsYears = parseFloat((this.earthYearsPassed()/1.88).toFixed(2))
//     return marsYears
// }
// jupiterYearsPassed() {
//     let jupiterYears = parseFloat((this.earthYearsPassed()/11.86).toFixed(2))
//     return jupiterYears
// }
// }

calculateYearsPassed(planet) {
    let earthYears = this.age - this.previousAge;
    let yearsPassed;
    let mercuryYearsPassed;
    let venusYearsPassed;
    let marsYearsPassed;
    let jupiterYearsPassed;

    switch (planet) {
      case 'Earth':
        yearsPassed = earthYears;
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
        yearsPassed = 'Invalid planet';
    }

    return yearsPassed;
  }
}