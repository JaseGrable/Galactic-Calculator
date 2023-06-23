export default class User {
    constructor(age) {
        this.age = age;    
}

//Age calculator for Mercury, Venus, Mars, Jupiter 
calculator(planet) {
    let mercuryAge;
  
    switch (planet) {
      case "Mercury":
        mercuryAge = parseFloat((this.age / 0.24).toFixed(2)) ;
        return mercuryAge;
      default:
        return false;
    }
}}