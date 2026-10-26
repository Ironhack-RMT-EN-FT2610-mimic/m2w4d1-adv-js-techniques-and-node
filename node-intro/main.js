console.log("file for running some packages")

import cows from "cows"

const arrayOfCows = cows()

let randomCowIndex = Math.floor(Math.random() * arrayOfCows.length)
console.log(arrayOfCows[randomCowIndex])