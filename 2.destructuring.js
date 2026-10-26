

const oneCuteDog = {
  name: "Bethoven",
  breed: "Saint Bernard",
  age: 6,
  place: {
    country: "Spain",
    city: "Valencia"
  },
  isVaccinated: true
}

function describeDog({ breed, age, name: dogName, place: { country, city } }) {
  // * above is destructuring via the parameter handling

  // * below is regular destructuring
  // const { breed, age, name: dogName, place: { country, city } } = dogParameter
  // const dogName = dogParameter.name
  // const breed = dogParameter.breed
  // const age = dogParameter.age
  // const country = dogParameter.location.country
  // const city = dogParameter.location.city

  console.log(`This dog called ${dogName} is a really cute dog. It is of breed ${breed} and has ${age} years of age`)
  console.log(`The dog is from ${city}, ${country}`)
  console.log(`${dogName} is the best. 11/10`)

}

describeDog(oneCuteDog)

const anotherCuteDog = {
  name: "Layka",
  breed: "Dobberman",
  age: 10,
  place: {
    country: "Portugal",
    city: "Lisbon"
  },
  isVaccinated: true
}

describeDog(anotherCuteDog)


//* Array destructuring

const myFavouriteThreeBooksEver = ["Dragonlance", "Discworld", "Dresden Files"]

const [ book1, book2, book3 ] = myFavouriteThreeBooksEver
// const book1 = myFavouriteThreeBooksEver[0]
// const book2 = myFavouriteThreeBooksEver[1]
// const book3 = myFavouriteThreeBooksEver[2]

console.log(`The favourite books from this person are: ${book1}, ${book2} and ${book3}`)