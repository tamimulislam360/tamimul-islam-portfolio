import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import acticleIcon from "../../../assets/articles/articles.png";
import SeeAllButton from "../../ui/buttons/SeeAllButton/SeeAllButton";
import ReadMoreButton from "../../ui/buttons/ReadMoreButton/ReadMoreButton";

const articles = [
  {
    id: 1,
    title: "All about Remote Job",
    thumbnail:
      "https://s3.eu-west-2.amazonaws.com/media.nigelwright.com/news/Remote+hiring+large+article+image.jpg",
    description:
      "Remote work is work done outside of a traditional office environment, also referred to as working from home or telecommuting. The concept of remote work is that employees can successfully execute projects and daily tasks without needing to commute to an office each day",
  },
  {
    id: 2,
    title: "All about Remote Job",
    thumbnail:
      "https://s3.eu-west-2.amazonaws.com/media.nigelwright.com/news/Remote+hiring+large+article+image.jpg",
    description:
      "Remote work is work done outside of a traditional office environment, also referred to as working from home or telecommuting. The concept of remote work is that employees can successfully execute projects and daily tasks without needing to commute to an office each day",
  },
  {
    id: 3,
    title: "All about Remote Job",
    thumbnail:
      "https://s3.eu-west-2.amazonaws.com/media.nigelwright.com/news/Remote+hiring+large+article+image.jpg",
    description:
      "Remote work is work done outside of a traditional office environment, also referred to as working from home or telecommuting. The concept of remote work is that employees can successfully execute projects and daily tasks without needing to commute to an office each day",
  },
];

const Articles = () => {
  return (
    <div className="section-bg-1 pt-10 pb-36">
      <div className="max-w-screen-xl mx-auto px-4">
        <SectionHeader
          header="Latest"
          headerSpan="Articles"
          subheader="My latest articles about tech."
          icon={acticleIcon}
        />
        <div className="w-full grid grid-cols-250 gap-3 grid-flow-dense relative">
          {articles.map((article) => (
            <div
              key={article.id}
              className={` p-1 border border-border-primary dark:border-border-secondary flex flex-col justify-between bg-white-secondary dark:bg-transparent hover:scale-95 duration-200`}
            >
              <div className=" overflow-hidden h-48 relative">
                <img src={article.thumbnail} className="w-full h-auto" alt="" />
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <h1 className="text-md font-bold">{article.title}</h1>

                <p>{article.description.slice(0, 60)}...</p>
                <div className="flex justify-start items-center">
                  <ReadMoreButton />
                </div>
              </div>
            </div>
          ))}
          <SeeAllButton className="!-bottom-24 dark:from-dark-primary" />
        </div>
      </div>
    </div>
  );
};

export default Articles;
