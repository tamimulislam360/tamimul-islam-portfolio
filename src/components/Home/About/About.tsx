import me2 from "../../../assets/me2.jpg";
import { Typography } from "@material-tailwind/react";
import Hireme from "../../ui/buttons/Hireme/Hireme";
import Socials from "../../ui/buttons/Socials/Socials";

const About = () => {
  return (
    <div className="py-16 bg-accent-primary dark:bg-dark-primary dark:border dark:border-dark-secondary">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center gap-4 text-white-primary">
        <Typography variant="h3" className="mb-3">
          About Me
        </Typography>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div
              data-aos="fade-up-left"
              data-aos-duration="500"
              className="group/me w-[200px] md:w-[280px] h-[300px] md:h-[350px] bg-accent-secondary/75 border-8 rounded-sm border-white-primary cursor-pointer mb-6 lg:mb-0"
            >
              <img
                src={me2}
                className="w-full h-full -mt-4 -ml-2 -rotate-6 object-cover border-8 rounded-sm border-white-primary group-hover/me:saturate-50 group-hover/me:ml-0 group-hover/me:mt-0 group-hover/me:rotate-0 duration-150"
                alt=""
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:border-l border-blob-5 pl-3">
            <p className="mb-3">
              Hello, I am Tamimul Islam, from Chittagong, Bangladesh. I am a
              MERN Stack Developer with 2 years of learning and hands on
              projects experience. I develope high performant, responsive,
              visually appealing, scalable web applications.
            </p>
            <p className="mb-3">
              I am a quick learner, team worker, enthusiastic and passinate web
              developer. I am currently looking for an opportunity as a web
              developer to utilize my expertise.
            </p>

            <div className="mt-10">
              <p>
                <span className="font-bold">Name:</span> Tamimul Islam
              </p>
              <p>
                <span className="font-bold">Designation:</span> MERN Stack
                Developer
              </p>
              <p>
                <span className="font-bold">Age:</span> 27
              </p>
              <p>
                <span className="font-bold">Education:</span> M.A. in Islamic
                Studies, University of Chittagong.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <Hireme />
              <Socials size={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
