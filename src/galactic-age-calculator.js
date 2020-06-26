export class GalacticAge {
  
  constructor (earthAge, sex, country, smoker) {
    this.earthAge = earthAge;
    this.sex = sex;
    this.country = country;
    this.smoker = smoker;

    this.lifeExpectancy = this.lifeExpectancyMethod();
    this.planetList = ["Earth", "Mercury", "Venus", "Mars", "Jupiter"];
    this.planetYearRatios = [1, .24, .62, 1.88, 11.86];
    this.lifeLeftByPlanet = this.lifeLeftByPlanetMethod();
  }

  lifeLeftByPlanetMethod () {
    let lifeLeftByPlanetArray = [];

    for (let i = 0; i < this.planetYearRatios.length; i++) {
      lifeLeftByPlanetArray.push(parseFloat((this.lifeLeft()/this.planetYearRatios[i]).toFixed(2)));
    }
    return lifeLeftByPlanetArray;
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

  lifeExpectancyMethod() {
    let lifeLeft
    if (this.country === "USA") {
      if (this.sex == "Female") {
        lifeLeft = 81.4;
      } else {
        lifeLeft = 76.3
      }
    }

    if (this.country === "Japan") {
      if (this.sex == "Female") {
        lifeLeft = 87.5;
      } else {
        lifeLeft = 81.3
      }
    }

    if (this.country === "Germany") {
      if (this.sex == "Female") {
        lifeLeft = 83.6;
      } else {
        lifeLeft = 78.8
      }
    }

    if (this.smoker === true) {
      lifeLeft -= 10;
    }

    return lifeLeft;
  }

  lifeLeft() {
    const lifeLeft = parseFloat((this.lifeExpectancyMethod() - this.earthAge).toFixed(2));
    return lifeLeft;
  }

}