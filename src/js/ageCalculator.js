export default class User {
    constructor(age) {
        this.age = age;    
}

//Age calculator for Mercury, Venus, Mars, Jupiter 
calculator(planet) {
    let mercuryAge;
    let venusAge;
  
    switch (planet) {
      case "Mercury":
        mercuryAge = parseFloat((this.age / 0.24).toFixed(2));
        return mercuryAge;
      case "Venus":
        return venusAge;
      default:
        return false;
    }
}}