import { Typography } from "@material-tailwind/react";
import pixel from "../../../assets/pixel.png";
import quality from "../../../assets/quality.png";
import idea from "../../../assets/idea.png";
import { useTheme } from "../../../context/ThemeProvider";

const speciality = [
  {
    id: 1,
    title: "Pixel Perfect",
    description:
      "Most common methods for designing websites that work well on desktop is responsive and adaptive design.",
    icon: pixel,
    bg: "#63D18D",
  },
  {
    id: 2,
    title: "High Quality",
    description:
      "Well Designed and Functional. Your site reflects your company, your products, your services and your brand.",
    icon: quality,
    bg: "#FF606C",
  },
  {
    id: 3,
    title: "Awesome Idea",
    description:
      "Make use of simple and convenient tools so that it becomes easy for the users to operate your website.",
    icon: idea,
    bg: "#E85511",
  },
];

const Speciality = () => {
  const [theme] = useTheme();
  return (
    <div className="mt-10 bg-white-primary dark:bg-dark-primary dark:text-white-primary">
      <div
        className={`max-w-screen-xl mx-auto grid grid-cols-250 gap-6 py-16  px-4 xl:px-0`}
      >
        {speciality.map((s) => (
          <div
            data-aos="flip-right"
            data-aos-duration="1000"
            key={s.id}
            className={`p-6 flex flex-col justify-center items-center gap-3 rounded-md shadow-md cursor-pointer dark:bg-dark-secondary ${
              theme !== "dark" ? "hover:bg-gradient1" : ""
            } dark:hover:bg-accent-primary text-center`}
          >
            <img src={s.icon} alt="" />
            <Typography variant="h4">{s.title}</Typography>
            <Typography variant="small">{s.description}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
