export class GalacticAge {
  
  constructor (earthAge, sex, country, smoker) {
    this.earthAge = earthAge;
    this.sex = sex;
    this.country = country;
    this.smoker = smoker;
  }

  mercuryAge() {
    return parseFloat((this.earthAge/.24).toFixed(2));
  }

  venusAge() {
    return parseFloat((this.earthAge/.62).toFixed(2));
  }

  marsAge() {
    return parseFloat((this.earthAge/1.88).toFixed(2));
  }

  jupiterAge() {
    return parseFloat((this.earthAge/11.86).toFixed(2));
  }

}