import {GalacticAge} from './../src/galactic-age-calculator'

describe ('age', ()=> {
  let testUser;

  beforeEach( () => {
    testUser = new GalacticAge(32);
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
    expect(testUser.jupiterAge()).toEqual(2.69);
  });


})