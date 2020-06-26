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

|9.| Using life expectancy data, the program can return the remaining number of years until life expectancy is met for Mercury, Venus, Mars, and Jupiter years| 32, Female, USA, non-smoker | Earth Years Remaining: 49.1 |_False_ |

|10.| If a user has already surpassed their life expectancy, then the program will return their age past the average life expectency for their demographic | 102, Female, USA | Years past life-expectancy: 20.9 | _False_ |