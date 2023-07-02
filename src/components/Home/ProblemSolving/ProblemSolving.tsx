import { useEffect, useState } from "react";
import { Chip, Typography } from "@material-tailwind/react";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SeeAllButton from "../../ui/buttons/SeeAllButton/SeeAllButton";

import { fetchRepos } from "../../../_api/api";
import { Link } from "react-router-dom";
import { useTheme } from "../../../context/ThemeProvider";

interface Challenge {
  id: string;
  title: string;
  description: string;
  branch_url: string;
}

const ProblemSolving = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [theme] = useTheme();

  useEffect(() => {
    fetchRepos()
      .then((data) => setChallenges(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={`section-bg-2 ${theme !== "dark" ? "bg-gradient1" : ""}`}>
      <div className="section-container">
        <SectionHeader
          header="Problem"
          headerSpan="Solving"
          subheader="I have solved 30+ problems with javascript."
          icon="https://learnwithsumit.com/_next/static/media/peep6.2c2aad47.svg"
        />

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry className="space-x-0 sm:space-x-2 relative">
            {challenges?.map((challenge) => (
              <Link
                data-aos="zoom-out"
                data-aos-duration="500"
                key={challenge.id}
                to={challenge.branch_url}
                target="_blank"
              >
                <div className="bg-accent-primary/10 dark:bg-dark-secondary dark:text-white-secondary flex flex-col gap-3 border border-border-primary dark:border-border-secondary hover:scale-[1.03] hover:-rotate-3 duration-200 mb-2 p-2 cursor-pointer">
                  <Typography variant="h4">{challenge.title}</Typography>
                  <Typography
                    variant="small"
                    className="text-dark-secondary dark:text-white-secondary"
                  >
                    <span className="font-bold">Challenge:</span>{" "}
                    {challenge.description}
                  </Typography>
                  <div className="flex gap-2">
                    <Chip variant="ghost" value="JS" />
                  </div>
                </div>
              </Link>
            ))}
            <SeeAllButton
              link="https://github.com/tamimulislam360/problem-solving"
              className="from-[#F8FAFC] dark:from-dark-secondary z-30"
            />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default ProblemSolving;
