import {GalacticAge} from './..sr/galacti-age-calculator.js'

describe ('age', ()=> {
  
  test('should store and retrieve a users submitted age', () => {
    let sampleUser = new GalacticAge(32);
    expect(sampleUser.earthAge).toBe(32);
  });


})