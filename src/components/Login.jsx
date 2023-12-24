import style from "../styles/login.module.css";
import { useState } from "react";
const Login = () => {
  const [nameError, setNError] = useState(true);
  const [cNumError, setNumError] = useState(true);
  const [dateError, setDateError] = useState(true);
  const [cvcError, setCvcError] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Number(document.getElementById("cardNum").value) == NaN) {
      console.log("true");
    }
  };
  return (
    <>
      <form className={style.login} onSubmit={handleSubmit}>
        <section>
          <label htmlFor="holderName">cardholder name </label>
          <br />
          <input
            type="text"
            id="holderName"
            name="holderName"
            placeholder="e.g. Jane Appleseed"
          />
          {nameError == true ? (
            <>
              <br />
              <strong className={style.error}>Can't be blank</strong>
            </>
          ) : (
            <></>
          )}
        </section>
        <section>
          <label htmlFor="cardNum">card number</label>
          <br />
          <input
            type="tel"
            name="cardNum"
            id="cardNum"
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </section>
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <label htmlFor="date">Exp. date (mm/yy)</label>
            <br />
            <input
              style={{ width: "30%" }}
              type="number"
              id="dateMonth"
              name="date"
              placeholder="MM"
            />
            <input
              style={{ width: "30%" }}
              type="number"
              id="dateYear"
              name="date"
              placeholder="YY"
            />
          </div>
          <div>
            <label htmlFor="CVC">cvc</label>
            <br />
            <input type="number" name="CVC" id="cvc" placeholder="e.g. 123" />
          </div>
        </section>
        <button type="submit">Confirm</button>
      </form>
    </>
  );
};

export default Login;
