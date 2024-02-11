import { useState } from "react";

const KEY = "a36111d7";
const query = "";

function App() {
  return <div className="App"></div>;
}

export default App;

// const fetchData = async () => {
//   try {
//     // const res = await fetch(
//     //   `http://www.omdbapi.com/?s=${query}&page=1&apikey=${KEY}`
//     // );

//     // const res = await fetch(
//     //   `http://www.omdbapi.com/?i=tt1851398&apikey=${KEY}`
//     // );

//     const res = await fetch(`https://www.mediawiki.org/w/api.php`);

//     if (!res.ok) {
//       throw new Error("something went wrong");
//     }
//     const data = await res.json();

//     console.log(data);
//   } catch (error) {}
// };
