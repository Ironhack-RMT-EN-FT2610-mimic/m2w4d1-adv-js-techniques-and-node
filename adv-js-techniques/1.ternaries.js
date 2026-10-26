console.log("testing")

const user = {
  username: "Ana",
  isLoggedIn: true,
  isVipMember: true,
  preferredTheme: "dark"
}

// if (user.isLoggedIn) {
//   console.log(`Hello ${user.username}`)
// } else {
//   console.log("Please log in")
// }

//* Ternary Operators
// condition ? expression if true : expression if false

// user.isLoggedIn ? console.log(`Hello ${user.username}`) : console.log("Please log in")

let message = user.isLoggedIn ? `Hello ${user.username}` : "Please log in"
console.log(message)

// user.isVipMember ? console.log("Thank you for being a valued member!") : null

//* Short Circuit Evaluation && 

user.isVipMember && console.log("Thank you for being a valued member!")

//* Short Circuit Evaluation || (default)

let selectedTheme = user.preferredTheme || "light"
console.log("selected theme", selectedTheme)