

//* SPREAD operators (...)

const someNumbers = [4, 8, 15,16, 23, 42]

console.log(someNumbers)

console.log(...someNumbers)

console.log( Math.min(...someNumbers) )
console.log( Math.max(...someNumbers) )


const students1 = ["ankit", "de waal", "ainhoa", "andre", "james"]
const students2 = ["tony", "eloy", "leo", "mustafa", "isaac"]

const allStudents = [ ...students2, ...students1, "jorge" ]
console.log(allStudents)

const user = {
  username: "bob",
  place: "pinnaple under the sea",
  hobby: "catching jellyfish"
}

// user.username = "Bob"

const newUser = {...user, username: "Bob", age: 20}
console.log("original", user)
console.log("copy", newUser)

//* REST operators (...)
// when destruturing elements from array to get all others not destructured.
// grabing multiple parameters from a function

function checkIfPassed(...allNotes) {
  // let allNotes = [arg1, arg2, arg3, arg4....]
  console.log(allNotes)

  const total = allNotes.reduce((acc, note) => {
    return acc + note
  }, 0)
  const avg = total / allNotes.length

  if (avg >= 5) {
    console.log(avg, "the student passed")
  } else {
    console.log(avg, "the student did not passed")
  }

}

checkIfPassed( 10, 5, 3 ) // 6
checkIfPassed( 6, 5, 2 ) 
checkIfPassed( 4, 3, 4, 10, 10 ) 
checkIfPassed( 8 ) // 8