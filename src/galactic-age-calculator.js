export class GalacticAge {
  
  constructor (earthAge) {
    this.earthAge = earthAge;
  }

  mercuryAge() {
    return parseFloat((this.earthAge/.24).toFixed(2));
  }

  venusAge() {
    return parseFloat((this.earthAge/.62).toFixed(2));
  }

}