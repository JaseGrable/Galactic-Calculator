import User from '../src/js/ageCalculator.js'; 

describe ('User', () => {
    let user; 

    beforeEach(() => {
        user = new User (30);
    });

    test('should correctly create a user object with a userAge property', () => {
        expect(user.age).toEqual(30);
    });

});