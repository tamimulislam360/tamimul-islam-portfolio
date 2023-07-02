import { Link } from "react-router-dom";
import styles from "./Hireme.module.css";

const Hireme = () => {
  return (
    <Link data-aos-duration="1000" data-aos="fade-left" to="https://www.linkedin.com/in/tamimulislam360" target="_blank">
      <button className={styles.cta}>
        <span>Hire me</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </Link>
  );
};

export default Hireme;
