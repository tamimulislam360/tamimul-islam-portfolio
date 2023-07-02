import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import styles from "./Socials.module.css";
import { Link } from "react-router-dom";

const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    href: "https://github.com/tamimulislam360",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/tamimulislam360",
  },
  {
    id: 3,
    icon: <FaFacebook />,
    href: "https://www.facebook.com/tamimulislam360",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    href: "https://www.instagram.com/tamimulislam360",
  },
  {
    id: 5,
    icon: <FaTwitter />,
    href: "https://twitter.com/tamimulislam360",
  },
];

const Socials = ({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <div className={`flex items-center gap-2 z-20 ${className}`}>
      {socials.slice(0, size).map((social) => (
        <Link to={social.href} target="_black">
          <button className={styles.Btn}>
            <span className={styles.svgContainer}>
              <span className="text-white-primary w-6 h-6 flex justify-center items-center">
                {social.icon}
              </span>
            </span>
            <span
              className={`${styles.BG} bg-dark-primary dark:bg-accent-secondary`}
            ></span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
