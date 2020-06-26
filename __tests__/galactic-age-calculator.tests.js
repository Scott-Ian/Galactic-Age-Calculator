import {GalacticAge} from './../src/galactic-age-calculator'

describe ('age', ()=> {
  let testUser;
  let germanSmoker;
  let oldJapaneseSmoker;

  beforeEach( () => {
    testUser = new GalacticAge(32, "Female", "USA", false);
    germanSmoker = new GalacticAge(45, "Male", "Germany", true);
    oldJapaneseSmoker = new GalacticAge(92, "Male", "Japan", true)
  })
  
  test('should store and retrieve a users submitted age in Earth years', () => {
    expect(testUser.earthAge).toBe(32);
  });

  test('should return the users age in Mercury years', () => {
    expect(testUser.ageByPlanetYears[1]).toEqual(133.33);
  });

  test('should return the users age in Venus years', () => {
    expect(testUser.ageByPlanetYears[2]).toEqual(51.61);
  });

  test('should return the users age in Mars years', () => {
    expect(testUser.ageByPlanetYears[3]).toEqual(17.02);
  });

  test('should return the users age in Jupiter years', () => {
    expect(testUser.ageByPlanetYears[4]).toEqual(2.7);
  });

  test('should return the users life expectancy data', () => {
    expect(testUser.sex).toEqual("Female");
    expect(testUser.country).toEqual("USA");
    expect(testUser.smoker).toEqual(false);
  });

  test('should determine the users average life expectancy', () => {
    expect(testUser.lifeExpectancyMethod()).toEqual(81.4);
    expect(germanSmoker.lifeExpectancyMethod()).toEqual(68.8);
  });

  test('should determine the number of years left until life expectancy is met', () => {
    expect(testUser.lifeLeft).toEqual(49.4);
    expect(germanSmoker.lifeLeft).toEqual(23.8);
  });

  test('should determine the number of years left until life expectancy is met in Earth, Mercury, Venus, Mars, and Jupiter years', () => {
    expect(testUser.lifeLeftByPlanet[0]).toBeCloseTo(49.4);
    expect(testUser.lifeLeftByPlanet[1]).toBeCloseTo(205.83);
    expect(testUser.lifeLeftByPlanet[2]).toBeCloseTo(79.68);
    expect(testUser.lifeLeftByPlanet[3]).toBeCloseTo(26.28);
    expect(testUser.lifeLeftByPlanet[4]).toBeCloseTo(4.17);
  });

  test('should be able to determine if a user has exceeded their life expectancy', ()=> {
    expect(testUser.exceededLifeExpectancy).toBe(false);
    expect(oldJapaneseSmoker.exceededLifeExpectancy).toBe(true);
  })

})