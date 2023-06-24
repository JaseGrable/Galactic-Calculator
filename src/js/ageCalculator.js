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

earthYearsPassed() {
    let earthYears = this.age - this.previousAge;
    return earthYears;
}
mercuryYearsPassed() {
    let mercuryYears = parseFloat((this.earthYearsPassed()/.24).toFixed(2))
    return mercuryYears 
}

}