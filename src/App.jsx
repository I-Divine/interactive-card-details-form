import { useState } from "react";
import Login from "./components/Login";
import Card_BG from "./components/Card_BG";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card_BG />
      <Login />
    </>
  );
}

export default App;
