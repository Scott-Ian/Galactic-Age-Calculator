import {GalacticAge} from './../src/galactic-age-calculator'

describe ('age', ()=> {
  let testUser;
  let germanSmoker;

  beforeEach( () => {
    testUser = new GalacticAge(32, "Female", "USA", false);
    germanSmoker = new GalacticAge(45, "Male", "Germany", true);
  })
  
  test('should store and retrieve a users submitted age in Earth years', () => {
    expect(testUser.earthAge).toBe(32);
  });

  test('should return the users age in Mercury years', () => {
    expect(testUser.mercuryAge()).toEqual(133.33);
  });

  test('should return the users age in Venus years', () => {
    expect(testUser.venusAge()).toEqual(51.61);
  });

  test('should return the users age in Mars years', () => {
    expect(testUser.marsAge()).toEqual(17.02);
  });

  test('should return the users age in Jupiter years', () => {
    expect(testUser.jupiterAge()).toEqual(2.7);
  });

  test('should return the users life expectancy data', () => {
    expect(testUser.sex).toEqual("Female");
    expect(testUser.country).toEqual("USA");
    expect(testUser.smoker).toEqual(false);
  });

  test('should determine the users average life expectancy', () => {
    expect(testUser.lifeExpectancy()).toEqual(81.4);
    expect(germanSmoker.lifeExpectancy()).toEqual(68.8);
  });

  test('should determine the number of years left until life expectancy is met', () => {
    expect(testUser.lifeLeft()).toBeCloseTo(49.4);
    expect(germanSmoker.lifeLeft()).toBeCloseTo(23.8);
  });


})