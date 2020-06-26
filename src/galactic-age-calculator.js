export class GalacticAge {
  
  constructor (earthAge) {
    this.earthAge = earthAge;
  }

  mercuryAge() {
    return parseFloat((this.earthAge/.24).toFixed(2));
  }

}