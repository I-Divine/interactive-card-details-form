import { useState } from "react";
import Login from "./components/Login";
import Card_BG from "./components/Card_BG";
// import "./App.css";
import style from "./styles/app.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={style.app}>
      <Card_BG />
      <Login />
    </div>
  );
}

export default App;
