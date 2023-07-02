import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { Link as NavLink } from "react-router-dom";

import { Link } from "react-scroll";

import { BsSun, BsMoonStars } from "react-icons/bs";

import PrimaryButton from "../../ui/buttons/PrimaryButton/PrimaryButton";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { useTheme } from "../../../context/ThemeProvider";

import logo from "../../../assets/logo.png";
import resume from "./Tamimul_Islam_resume.pdf";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const [theme, toggleTheme] = useTheme();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // nav links
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-semibold transition-all dark:text-white-primary cursor-pointer hover:text-accent-primary dark:hover:text-accent-secondary focus:text-accent-primary dark:focus:text-accent-secondary hover:border-b-2 border-accent-primary dark:border-accent-secondary"
      >
        <Link
          to="hero"
          spy={true}
          activeClass="text-accent-primary dark:text-accent-secondary border-b-2 border-accent-primary dark:border-accent-secondary"
          smooth={true}
          offset={-20} // Adjust this value to your needs to offset the scrolling position
          duration={500} // Adjust this value to control the scrolling speed
          className="flex items-center"
        >
          Home
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-semibold transition-all dark:text-white-primary cursor-pointer hover:text-accent-primary dark:hover:text-accent-secondary focus:text-accent-primary dark:focus:text-accent-secondary hover:border-b-2 border-accent-primary dark:border-accent-secondary"
      >
        <Link
          to="skills"
          spy={true}
          activeClass="text-accent-primary dark:text-accent-secondary border-b-2 border-accent-primary dark:border-accent-secondary"
          smooth={true}
          offset={-20}
          duration={500}
          className="flex items-center"
        >
          Skills
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-semibold transition-all dark:text-white-primary cursor-pointer hover:text-accent-primary dark:hover:text-accent-secondary focus:text-accent-primary dark:focus:text-accent-secondary hover:border-b-2 border-accent-primary dark:border-accent-secondary"
      >
        <Link
          to="about"
          spy={true}
          activeClass="text-accent-primary dark:text-accent-secondary border-b-2 border-accent-primary dark:border-accent-secondary"
          smooth={true}
          offset={-20}
          duration={500}
          className="flex items-center"
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-semibold transition-all dark:text-white-primary cursor-pointer hover:text-accent-primary dark:hover:text-accent-secondary focus:text-accent-primary dark:focus:text-accent-secondary hover:border-b-2 border-accent-primary dark:border-accent-secondary"
      >
        <Link
          to="services"
          spy={true}
          activeClass="text-accent-primary dark:text-accent-secondary border-b-2 border-accent-primary dark:border-accent-secondary"
          smooth={true}
          offset={-20} // Adjust this value to your needs to offset the scrolling position
          duration={500} // Adjust this value to control the scrolling speed
          className="flex items-center"
        >
          Services
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-semibold transition-all dark:text-white-primary cursor-pointer hover:text-accent-primary dark:hover:text-accent-secondary focus:text-accent-primary dark:focus:text-accent-secondary hover:border-b-2 border-accent-primary dark:border-accent-secondary"
      >
        <Link
          to="projects"
          spy={true}
          activeClass="text-accent-primary dark:text-accent-secondary border-b-2 border-accent-primary dark:border-accent-secondary"
          smooth={true}
          offset={-20}
          duration={500}
          className="flex items-center"
        >
          Projects
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-semibold transition-all dark:text-white-primary cursor-pointer hover:text-accent-primary dark:hover:text-accent-secondary focus:text-accent-primary dark:focus:text-accent-secondary hover:border-b-2 border-accent-primary dark:border-accent-secondary"
      >
        <Link
          to="problem-solving"
          spy={true}
          activeClass="text-accent-primary dark:text-accent-secondary border-b-2 border-accent-primary dark:border-accent-secondary"
          smooth={true}
          offset={-20} // Adjust this value to your needs to offset the scrolling position
          duration={500} // Adjust this value to control the scrolling speed
          className="flex items-center"
        >
          Problem Solving
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-semibold transition-all dark:text-white-primary cursor-pointer hover:text-accent-primary dark:hover:text-accent-secondary focus:text-accent-primary dark:focus:text-accent-secondary hover:border-b-2 border-accent-primary dark:border-accent-secondary"
      >
        <Link
          to="articles"
          spy={true}
          activeClass="text-accent-primary dark:text-accent-secondary border-b-2 border-accent-primary dark:border-accent-secondary"
          smooth={true}
          offset={-20} // Adjust this value to your needs to offset the scrolling position
          duration={500} // Adjust this value to control the scrolling speed
          className="flex items-center"
        >
          Articles
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="font-semibold transition-all dark:text-white-primary cursor-pointer hover:text-accent-primary dark:hover:text-accent-secondary focus:text-accent-primary dark:focus:text-accent-secondary hover:border-b-2 border-accent-primary dark:border-accent-secondary"
      >
        <Link
          to="contact"
          spy={true}
          activeClass="text-accent-primary dark:text-accent-secondary border-b-2 border-accent-primary dark:border-accent-secondary"
          smooth={true}
          offset={-20}
          duration={500}
          className="flex items-center"
        >
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar
        data-aos="fade-in"
        className="fixed top-0 left-0 z-50 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py bg-transparent border-none"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          {/* logo */}
          <NavLink to="/" className="flex justify-between items-center">
            <img src={logo} className="w-12 h-12" alt="" />
          </NavLink>

          <div className="flex items-center gap-4 ml-auto">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <a href={resume} download>
              <PrimaryButton className="hidden lg:inline-flex gap-1 items-center">
                <AiOutlineCloudDownload className="text-lg" /> Resume
              </PrimaryButton>
            </a>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-dark-primary dark:text-white-primary hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>

          {/* theme toggler */}
          <Menu>
            <MenuHandler className="ml-2 cursor-pointer">
              <div>
                {theme === "dark" ? (
                  <BsSun className="dark:text-white-primary" />
                ) : (
                  <BsMoonStars className="dark:text-white-primary" />
                )}
              </div>
            </MenuHandler>
            <MenuList
              className={`${
                theme === "dark" ? "bg-dark-primary" : ""
              } border-none`}
            >
              <MenuItem
                className={`${
                  theme === "dark"
                    ? "hover:bg-dark-secondary text-white-primary"
                    : ""
                }`}
                onClick={() => toggleTheme("light")}
              >
                Light
              </MenuItem>
              <MenuItem
                className={`${
                  theme === "dark"
                    ? "hover:bg-dark-secondary text-white-primary"
                    : ""
                }`}
                onClick={() => toggleTheme("dark")}
              >
                Dark
              </MenuItem>
              <MenuItem
                className={`${
                  theme === "dark"
                    ? "hover:bg-dark-secondary text-white-primary"
                    : ""
                }`}
                onClick={() => toggleTheme("system")}
              >
                System
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <PrimaryButton className="w-full">Download Resume</PrimaryButton>
        </MobileNav>
      </Navbar>
    </>
  );
}
