import {GalacticAge} from './../src/galactic-age-calculator'

describe ('age', ()=> {
  
  test('should store and retrieve a users submitted age in Earth years', () => {
    let sampleUser = new GalacticAge(32);
    expect(sampleUser.earthAge).toBe(32);
  });


})