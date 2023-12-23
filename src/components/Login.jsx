const Login = () => {
  return (
    <>
      <form>
        <section>
          <label htmlFor="holderName">cardholder name </label>
          <input
            type="text"
            id="holderName"
            name="holderName"
            placeholder="e.g. Jane Appleseed"
          />
        </section>
        <section>
          <label htmlFor="cardNum">card number</label>
          <input
            type="tel"
            name="cardNum"
            id="cardNum"
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </section>
        <section style={{ display: "flex" }}>
          <div>
            <label htmlFor="date">Exp. date (mm/yy)</label>
            <input type="number" id="dateMonth" name="date" placeholder="MM" />
            <input type="number" id="dateYear" name="date" placeholder="YY" />
          </div>
          <div>
            <label htmlFor="CVC">cvc</label>
            <input type="number" name="CVC" id="cvc" placeholder="e.g. 123" />
          </div>
        </section>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
