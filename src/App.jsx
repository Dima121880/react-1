import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// function App() {
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setlastname] = useState("");

//   const clear = () => {
//     setFirstname("");
//     setlastname("");
//   };
//   return (
//     <>
//       <input
//         type="text"
//         volue={Firstname}
//         placeholder="Firstname"
//         onChange={(e) => setFirstname(e.target.volue)}
//       />
//       <br />
//       <input
//         type="text"
//         volue={lastname}
//         placeholder="lastname"
//         onChange={(e) => setlastname(e.target.volue)}
//       />
//       <br />
//       {firstname} {lastname}
//       <button onClick={() => clear}>clear</button>
//     </>
//   );
// }
function App() {
  const [Firstname, setFirstname] = useState("");
  const [lastname, setlastname] = useState("");

  const clear = () => {
    setFirstname("");
    setlastname("");
  };
  return (
    <>
      <input
        type="text"
        value={Firstname}
        placeholder="Firstname"
        onChange={(e) => setFirstname(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={lastname}
        placeholder="lastname"
        onChange={(e) => setlastname(e.target.value)}
      />
      <br />
      {Firstname} {lastname}
      <br />
      <button onClick={() => clear()}>clear</button>
      <br />
      <div>
        <a href="" target="_blank">
          <img
            src={
              "https://tse2.mm.bing.net/th?id=OIP.JDa_1X-NqdM1K-bZxp99DQHaEo&pid=Api&P=0&h=220"
            }
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="" target="">
          <img
            src={
              "https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=220"
            }
            className="logo react"
            alt="React logo"
          />
        </a>
        <a href="" target="_blank">
          <img
            src={
              "https://tse3.mm.bing.net/th?id=OIP.rt-pujAJJlfsYntGE4rRAgHaE7&pid=Api&P=0&h=220"
            }
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="" target="_blank">
          <img
            src={
              "https://tse3.mm.bing.net/th?id=OIP.0iqvqUM-_MntTZp4CMBaigHaEK&pid=Api&P=0&h=220"
            }
            className="logo react"
            alt="React logo"
          />
        </a>
        <a href="" target="_blank">
          <img
            src={
              "https://tse4.mm.bing.net/th?id=OIP.C2jx84-6xaPAth9E4dkzGAHaHa&pid=Api&P=0&h=220"
            }
            className="logo"
            alt="Vite logo"
          />
        </a>
      </div>
    </>
  );
}

export default App;
