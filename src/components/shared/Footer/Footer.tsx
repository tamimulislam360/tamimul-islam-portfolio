import { Typography } from "@material-tailwind/react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { Link as NavLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full bg-white-primary dark:bg-dark-secondary  p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <Link to="/">
          <img src={logo} alt="logo" className="w-12 h-12" />
        </Link>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <NavLink
              to="about"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="flex items-center"
            >
              <Typography
                color="blue-gray"
                className="font-normal transition-all dark:text-white-primary cursor-pointer hover:text-accent-primary dark:hover:text-accent-secondary focus:text-accent-primary dark:focus:text-accent-secondary hover:border-b-2 border-accent-primary dark:border-accent-secondary"
              >
                About
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="flex items-center"
            >
              <Typography
                color="blue-gray"
                className="font-normal transition-all dark:text-white-primary cursor-pointer hover:text-accent-primary dark:hover:text-accent-secondary focus:text-accent-primary dark:focus:text-accent-secondary hover:border-b-2 border-accent-primary dark:border-accent-secondary"
              >
                Prjects
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="flex items-center"
            >
              <Typography
                color="blue-gray"
                className="font-normal transition-all dark:text-white-primary cursor-pointer hover:text-accent-primary dark:hover:text-accent-secondary focus:text-accent-primary dark:focus:text-accent-secondary hover:border-b-2 border-accent-primary dark:border-accent-secondary"
              >
                Skills
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="flex items-center"
            >
              <Typography
                color="blue-gray"
                className="font-normal transition-all dark:text-white-primary cursor-pointer hover:text-accent-primary dark:hover:text-accent-secondary focus:text-accent-primary dark:focus:text-accent-secondary hover:border-b-2 border-accent-primary dark:border-accent-secondary"
              >
                Contact
              </Typography>
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-border-primary dark:border-border-secondary" />
      <Typography
        color="blue-gray"
        className="text-center font-normal dark:text-white-secondary"
      >
        Made with ❤️ By Tamimul Islam
      </Typography>
    </footer>
  );
};

export default Footer;
