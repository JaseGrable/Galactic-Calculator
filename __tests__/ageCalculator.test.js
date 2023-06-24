import User from '../src/js/ageCalculator.js'; 

describe ('User', () => {
    let user; 
    let earthYears;

    beforeEach(() => {
        user = new User(30, 20);
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
// Determine Mars Years (1.88 Earth years)
    test('should correctly convert users earth age into Mars years', () => {
        expect(user.calculator("Mars")).toEqual(15.96)
    })
//Determine Jupiter Age (11.86 Earth years)
test('should correctly convert users earth age into Jupiter years', () => {
    expect(user.calculator("Jupiter")).toEqual(2.53)
})
//Test default case behavior. Should return false when not one of the above planets 
test('should correctly return false when not one of the above planets', () => {
    expect(user.calculator("")).toEqual(false)
    expect(user.calculator("pluto")).toEqual(false)
})

test('should correctly return how many years have passed on earth since a specified birthday', () => {
    expect(user.earthYearsPassed()).toEqual(10);
})

test('should correctly return how many years have passed on mercury since specified birthday', () => {
    expect(user.mercuryYearsPassed()).toEqual(41.67)
})
test('should correctly return how many years have passed on venus since specified birthday', () => {
    expect(user.venusYearsPassed()).toEqual(16.13)
})
test('should correctly return how many years have passed on mars since specified birthday', () => {
    expect(user.marsYearsPassed()).toEqual(5.32)
})
})
