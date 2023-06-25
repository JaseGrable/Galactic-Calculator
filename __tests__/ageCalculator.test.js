import User from '../src/js/ageCalculator.js'; 

describe ('User', () => {
    let user; 

    beforeEach(() => {
        user = new User(30, 20, 45);
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
    expect(user.calculator("")).toBe('Invalid Planet')
    expect(user.calculator("pluto")).toBe('Invalid Planet')
})

test('should correctly return how many years have passed on earth since a specified birthday', () => {
    expect(user.calculateYearsPassed("Earth")).toEqual(10);
})

test('should correctly return how many years have passed on mercury since specified birthday', () => {
    expect(user.calculateYearsPassed("Mercury")).toEqual(41.67)
})
test('should correctly return how many years have passed on venus since specified birthday', () => {
    expect(user.calculateYearsPassed("Venus")).toEqual(16.13)
})
test('should correctly return how many years have passed on mars since specified birthday', () => {
    expect(user.calculateYearsPassed("Mars")).toEqual(5.32)
})
test('should correctly return how many years have passed on jupiter since specified birthday', () => {
    expect(user.calculateYearsPassed("Jupiter")).toEqual(.84)
})
test('should correctly return Invalid Planet when one of the above planets have been selected', () => {
    expect(user.calculateYearsPassed("Pluto")).toBe('Invalid Planet')
    expect(user.calculateYearsPassed(" ")).toBe('Invalid Planet')
})

test ('should correctly return Earth years until next birthday', () => {
    expect(user.calculateYearsUntil("Earth")).toEqual(15)
})
test ('should correctly return Mercury years until next birthday', () => {
    expect(user.calculateYearsUntil("Mercury")).toEqual(62.5)
})
test ('should correctly return Venus years until next birthday', () => {
    expect(user.calculateYearsUntil("Venus")).toEqual(24.19)
})
test ('should correctly return Mars years until next birthday', () => {
    expect(user.calculateYearsUntil("Mars")).toEqual(7.98)
})
test ('should correctly return Jupiter years until next birthday', () => {
    expect(user.calculateYearsUntil("Jupiter")).toEqual(1.26)
})
})
