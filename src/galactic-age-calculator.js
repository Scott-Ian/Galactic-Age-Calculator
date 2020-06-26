export class GalacticAge {
  
  constructor (earthAge, sex, country, smoker) {
    this.earthAge = earthAge;
    this.sex = sex;
    this.country = country;
    this.smoker = smoker;
    this.exceededLifeExpectancy = false;

    this.lifeExpectancy = this.lifeExpectancyMethod();
    this.lifeLeft = this.lifeLeftMethod();
    this.planetList = ["Earth", "Mercury", "Venus", "Mars", "Jupiter"];
    this.planetYearRatios = [1, .24, .62, 1.88, 11.86];
    this.ageByPlanetYears = this.ageByPlanetYearsMethod();
    this.lifeLeftByPlanet = this.lifeLeftByPlanetMethod();
  }

  ageByPlanetYearsMethod () {
    let ageByPlanetYearsArray = [];

    for (let i = 0; i < this.planetYearRatios.length; i++) {
      ageByPlanetYearsArray.push(`Your age in ${this.planetList[i]} years is: ${parseFloat((this.earthAge/this.planetYearRatios[i]).toFixed(2))}`);
    }
    return ageByPlanetYearsArray;
  }

  lifeLeftByPlanetMethod () { 
    let lifeLeftByPlanetArray = [];
    if (this.exceededLifeExpectancy === false) {
      for (let i = 0; i < this.planetYearRatios.length; i++) {
        lifeLeftByPlanetArray.push(`Your remaining life expectancy in ${this.planetList[i]} years is: ${parseFloat((this.lifeLeft/this.planetYearRatios[i]).toFixed(2))}`);
      }
    } else {
      for (let i = 0; i < this.planetYearRatios.length; i++) {
        lifeLeftByPlanetArray.push(`You have exceeded your life expectancy in ${this.planetList[i]} years by: ${parseFloat(-1 * (this.lifeLeft/this.planetYearRatios[i]).toFixed(2))}`);
      }
    }
    return lifeLeftByPlanetArray;
  }

  lifeExpectancyMethod() {
    let lifeExpectancy;
    if (this.country === "USA") {
      if (this.sex == "Female") {
        lifeExpectancy = 81.4;
      } else {
        lifeExpectancy = 76.3;
      }
    }

    if (this.country === "Japan") {
      if (this.sex == "Female") {
        lifeExpectancy = 87.5;
      } else {
        lifeExpectancy = 81.3;
      }
    }

    if (this.country === "Germany") {
      if (this.sex == "Female") {
        lifeExpectancy = 83.6;
      } else {
        lifeExpectancy = 78.8;
      }
    }

    if (this.smoker === true) {
      lifeExpectancy -= 10;
    }

    return lifeExpectancy;
  }

  lifeLeftMethod() {
    let lifeLeft = parseFloat((this.lifeExpectancyMethod() - this.earthAge).toFixed(2));
    if (lifeLeft < 0) {
      this.exceededLifeExpectancy = true;
    }
    return lifeLeft;
  }
}