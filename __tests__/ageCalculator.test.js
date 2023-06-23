import User from '../src/js/ageCalculator.js'; 

describe ('User', () => {
    let user; 

    beforeEach(() => {
        user = new User (30);
    });
// Determine user's Earth age. 
    test('should correctly create a user object with a userAge property', () => {
        expect(user.age).toEqual(30);
    });
// Determine Mercury Age (.24 Earth years)
    test('should correctly convert users earth age into Mercury years', ()=> {
        expect(user.calculator("Mercury")).toEqual(125)
    });
// Determine Venus Years (.62 Earth years)
    test('should correctly convert users earth age into Venus years', () => {
        expect(user.calculator("Venus")).toEqual(48.39)
    })
});