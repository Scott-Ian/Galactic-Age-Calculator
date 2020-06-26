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

  lifeExpectancy() {
    let lifeExpectancy;

    if (this.country === "USA") {
      if (this.sex == "Female") {
        lifeExpectancy = 81.4;
      } else {
        lifeExpectancy = 76.3
      }
    }

    if (this.country === "Japan") {
      if (this.sex == "Female") {
        lifeExpectancy = 87.5;
      } else {
        lifeExpectancy = 81.3
      }
    }

    if (this.country === "Germany") {
      if (this.sex == "Female") {
        lifeExpectancy = 83.6;
      } else {
        lifeExpectancy = 78.8
      }
    }

    if (this.smoker === true) {
      lifeExpectancy -= 10;
    }

    return lifeExpectancy;
  }

  lifeLeft() {
    const lifeLeft = parseFloat((this.lifeExpectancy() - this.earthAge).toFixed(2));
    return lifeLeft;
  }

}