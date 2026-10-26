// via CDN we have access to React and ReactDOM global variables

console.log(React)
console.log(ReactDOM)

// Select the real DOM element where the React app will mount
const app = document.querySelector("#app")

// Create a React root to manage updates to the selected DOM node
const root = ReactDOM.createRoot(app)

let user = {
  username: "bob",
  score: 10
}

//JSX => JS + XML
// let someContent = (
//   <div>
//     <h1>Hello!</h1>
//     <p>This is an app built with React!</p>
//     <p>Welcome to the page! {user.username}. You have a score of {user.score}</p>
//     <input />
//   </div>
// )

// Component => function that returns some JSX
function UserInfo() {

  // run some JS logic here...

  return (
    <div>
      <h1>Hello!</h1>
      <p>This is an app built with React!</p>
      <p>Welcome to the page! {user.username}. You have a score of {user.score}</p>
      <input />
    </div>
  )
}

// Render the React element into the real DOM
// root.render( UserInfo() )
root.render( <UserInfo /> ) // invoking a component
