import style from "../styles/login.module.css";
import { useState } from "react";
const Login = () => {
  const [nameError, setNError] = useState(false);
  const [cNumBlankError, setNumBlankError] = useState(false);
  const [cNumFormatError, setNumFormatError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [cvcError, setCvcError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setNError(false);
    setNumBlankError(false);
    setNumFormatError(false);
    setDateError(false);
    setCvcError(false);

    let name = document.getElementById("holderName").value;
    let cardNum = document.getElementById("cardNum").value;
    let date = document.getElementById("dateMonth").value;
    let dateYear = document.getElementById("dateYear").value;
    let cvc = document.getElementById("cvc").value;
    if (name == "") {
      setNError(true);
    } else if (cardNum == "") {
      setNumBlankError(true);
    } else if (isNaN(cardNum)) {
      setNumFormatError(true);
    } else if (date == "" || dateYear == "") {
      setDateError(true);
    } else if (cvc == "") {
      setCvcError(true);
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
          {cNumBlankError == true ? (
            <>
              <br />
              <strong className={style.error}>Can't be blank</strong>
            </>
          ) : (
            <></>
          )}
          {cNumFormatError == true ? (
            <>
              <br />
              <strong className={style.error}>
                Wrong format, numbers only
              </strong>
            </>
          ) : (
            <></>
          )}
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
            {dateError == true ? (
              <>
                <br />
                <strong className={style.error}>Can't be blank</strong>
              </>
            ) : (
              <></>
            )}
          </div>
          <div>
            <label htmlFor="CVC">cvc</label>
            <br />
            <input type="number" name="CVC" id="cvc" placeholder="e.g. 123" />
            {cvcError == true ? (
              <>
                <br />
                <strong className={style.error}>Can't be blank</strong>
              </>
            ) : (
              <></>
            )}
          </div>
        </section>
        <button type="submit">Confirm</button>
      </form>
    </>
  );
};

export default Login;
