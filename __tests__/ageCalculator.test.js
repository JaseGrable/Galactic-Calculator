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
// Determine Mercury Age 
    test('should correctly convert users age into Mercury years', ()=> {
        expect(user.calculator("Mercury")).toEqual(125)
    });
});