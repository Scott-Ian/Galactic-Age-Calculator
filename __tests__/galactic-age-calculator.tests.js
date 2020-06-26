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
    expect(testUser.mercuryAge()).toReturn(133.33);
  } )


})