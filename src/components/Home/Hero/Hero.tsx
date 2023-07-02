import { Typography } from "@material-tailwind/react";
import Hireme from "../../ui/buttons/Hireme/Hireme";
import { useTheme } from "../../../context/ThemeProvider";
import Socials from "../../ui/buttons/Socials/Socials";

const Hero = () => {
  const [theme] = useTheme();
  return (
    <div
      className={`min-h-screen ${
        theme !== "dark" ? "bg-gradient1" : ""
      } dark:bg-dark-secondary dark:text-white-secondary mb-10`}
    >
      <div className="min-h-screen flex justify-center items-center relative  ">
        <div className="max-w-screen-xl h-full mx-auto  py-8 px-3 lg:pt-20 lg-px-6">
          <div className="flex flex-col-reverse lg:flex-row justify-center  gap-1">
            <div className="  flex flex-col justify-center items-center lg:items-start gap-5">
              <Typography
                data-aos-duration="1000"
                data-aos="zoom-in"
                variant="small"
                className="text-xl "
              >
                Hello, I am
              </Typography>
              <Typography
                data-aos-duration="1000"
                data-aos="fade-right"
                variant="h4"
                className="text-6xl font-normal"
              >
                Tamimul Islam
              </Typography>
              <Typography
                data-aos-duration="1000"
                data-aos="zoom-in-up"
                variant="small"
                className="text-xl text-center lg:text-left"
              >
                I am a MERN Stack Developer, My key responsibility is <br /> to
                develop responsive user-friendly, scalable web applications.
              </Typography>

              <div className="flex items-center gap-2">
                <Hireme />
                <Socials size={3} />
              </div>
            </div>
            <div>
              <div className="max-w-[38rem] mx-auto xl:w-[38rem] relative isolate overflow-hidden pb-3">
                <img
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  src="https://i.ibb.co/m5gtZ5K/me2.png"
                  className="ml-8 lg:ml-10 "
                  alt=""
                />
                <img
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  src="https://www.starpng.com/public/uploads/preview/brush-png-transparent-brush-51576433112rsa6l2staw.png"
                  className="absolute top-0 left-10 -z-10 max-w-[32rem] w-[24rem] md:w-[32rem] invert"
                  alt=""
                />
                <div className="absolute w-2/3 h-full bottom-0 left-10 right-0 bg-gradient-to-t from-white-secondary dark:from-dark-secondary via-transparent dark:via-transparent to-transparent dark:to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="hidden lg:block absolute -bottom-12 left-0 right-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill={theme === "dark" ? "#0F172A" : "#FFFFFF"}
            fillOpacity="1"
            d="M0,224L80,234.7C160,245,320,267,480,250.7C640,235,800,181,960,154.7C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
