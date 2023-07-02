import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaBootstrap, FaNpm } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoFirebase,
  BiLogoRedux,
} from "react-icons/bi";

import { SiExpress, SiMongoose, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";
import { SiJsonwebtokens } from "react-icons/si";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import { useTheme } from "../../../context/ThemeProvider";

const skills = [
  <AiOutlineHtml5 />,
  <FaCss3Alt />,
  <BiLogoJavascript />,
  <FaBootstrap />,
  <BiLogoTailwindCss />,
  <BiLogoReact />,
  <BiLogoRedux />,
  <BiLogoNodejs />,
  <BiLogoMongodb />,
  <SiMongoose />,
  <SiTypescript />,
  <SiExpress />,
  <BiLogoFirebase />,
  <TbBrandNextjs />,
  <IoLogoVercel />,
  <FaNpm />,
  <SiJsonwebtokens />,
];

const Skills = () => {
  const [theme] = useTheme();
  return (
    <div
      className={`section-bg-2 ${
        theme !== "dark" ? "bg-gradient1" : ""
      } dark:bg-dark-primary dark:text-white-primary`}
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <SectionHeader
          header="My"
          headerSpan="Skills Set"
          subheader="I keep learning new technologies to enhance my skills."
          icon="https://learnwithsumit.com/_next/static/media/Prerequisite.b0ff46bc.svg"
        />
        <div className="w-full flex flex-wrap justify-center gap-10">
          {skills.map((skill, i) => (
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              key={i}
              className="rounded-sm bg-white-secondary dark:bg-dark-secondary shadow-sm border border-border-primary dark:border-border-secondary p-4 text-dark-primary dark:text-white-primary w-fit flex justify-center items-center hover:bg-accent-primary hover:text-white-primary duration-100 cursor-pointer dark:hover:bg-accent-secondary text-4xl"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
