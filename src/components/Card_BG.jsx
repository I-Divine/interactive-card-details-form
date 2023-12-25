import bg_img from "../images/bg-main-mobile.png";
import cardImgFront from "../images/bg-card-front.png";
import cardImgBack from "../images/bg-card-back.png";
import cardLogo from "../images/card-logo.svg";
import iconComplete from "../images/icon-complete.svg";
import styles from "../styles/bg_img.module.css";
const Card_BG = () => {
  return (
    <div className={styles.bgMain}>
      {/* <img className={styles.bgImg} src={bg_img} alt="" /> */}
      {/* <img src={cardImgBack} alt="" /> */}
      <div className={styles.cardBack}>
        <div>000</div>
      </div>
      <div className={styles.cardFront}>
        <img className={styles.cardLogo} src={cardLogo} alt="" />
        <div style={{ marginTop: "10px", color: "white", fontSize: "1.7em" }}>
          0000 0000 0000 0000
        </div>
        <div
          style={{
            display: "flex",
            color: "white",
            justifyContent: "space-between",
          }}
        >
          <div>jane appleseed</div>
          <div>00/00</div>
        </div>
      </div>
      <div>{/* <img src={iconComplete} alt="" /> */}</div>
      {/* <img src={cardImgFront} alt="" /> */}
    </div>
  );
};

export default Card_BG;
