# _Galactic Age Calculator_

#### _Converts a users age using different planetary calendars, June 26, 2020_

#### By _**Ian Scott**_

## Description

_This application transforms a users age into Mercury, Venus, Mars, and Jupiter years. It also includes a vasic life expectancy quiz, to convert remaining years into the same planetary year counts. If a user has exceeded their expected lifespan, the program will adjust its response._

## Setup/Installation Requirements

_Open via Bash/GitBash;_
1. Clone this repository onto your computer: https://github.com/Scott-Ian/Galactic-Age-Calculator.git
2. Navigate into the "Galactic-Age-Calculator" directory in Visual Studio Code, or your preferred text editor
3. Install the necessary packages with: npm install
4. Build the project with: npm run build, then open dist/index.html in your browser of choice
5. Alternatively, open a live development server in your browser with: npm run start

## specifications

| | Behavior | Input | Output | isComplete |
|----|----|----|----|----|
|1.| The program is able to store and return a users age in years | 32 | 32 | _True_ |
|2.| The program can accurately return a users age in Mercury years | 32 | 133.33 | _True_|
|3.| The program can accurately return a users age in Venus years | 32 | 51.61 | _True_ |
|4.| The program can accurately return a users age in Mars years | 32 | 17.02 | _True_ |
|5.| The program can accurately return a users age in Jupiter years | 32 | 2.69 | _True_|
|6.| The program is able to store some life expectency data on the user (age, sex, country of residence, smoker staus), and return it if necessary | 32, Female, USA, non-smoker | 32, Female, USA | _True_ |
|7.| Using life expectancy data, the program can return the estimated life expectancy | 32, Female, USA, non-smoker | 81.4| _True_ |
|8.| Using life expectancy data, the program can return the remaining number of years until life expectancy is met | 32, Female, USA, non-smoker | 49.1 |_True_ |
|9.| Using life expectancy data, the program can return the remaining number of years until life expectancy is met for Mercury, Venus, Mars, and Jupiter years| 32, Female, USA, non-smoker | Earth Years Remaining: 49.1 |_True_ |
|10.| If a user has already surpassed their life expectancy, then the program will return their age past the average life expectency for their demographic | 102, Female, USA | Years past life-expectancy: 20.9 | _True_ |

## Known Bugs

_There are currently no known bugs. However, this project purely encompases business logic, and does not include any user interface._

## Support and contact details

_If you have any questions, run into any issues or bugs, or if you would like to contribute to this project, please contact the author via e-mail at: chesnekov@gmail.com._

## Technologies Used

_This program utilizes HTML, CSS, Bootstrap v3.3.7, jQuery, Node Packet Manager, and Jest for Test Drive Development. This program also includes JavaScript classes, template literals, and the import/export of scripts._

### License

Copyright (c) 2020 **_Ian Scott._** This web project is licensed under the MIT license.
