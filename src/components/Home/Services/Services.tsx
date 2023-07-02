import { FaCloudUploadAlt, FaCode, FaCodeBranch, FaComments, FaDatabase, FaDesktop, FaRocket, FaServer, FaTools } from "react-icons/fa";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import { Typography } from "@material-tailwind/react";



const services = [
    {
      "id": 1,
      "title": "Web Application",
      "description": "Build robust and scalable web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. From planning and designing to development and deployment, I can create customized web solutions tailored to your specific needs.",
      "icon": <FaCode />
    },
    {
      "id": 2,
      "title": "RESTful API",
      "description": "Develop RESTful APIs using Node.js and Express.js to enable seamless communication between front-end applications and databases. I specialize in creating secure and efficient APIs that provide reliable data exchange and integration capabilities.",
      "icon": <FaServer />
    },
    {
      "id": 3,
      "title": "Single Page Application (SPA)",
      "description": "Craft interactive and user-friendly single-page applications using React.js. I can create dynamic UI components and implement smooth navigation, enhancing the overall user experience while ensuring optimal performance.",
      "icon": <FaDesktop />
    },
    {
      "id": 4,
      "title": "Database Design and Integration",
      "description": "Design and integrate databases using MongoDB, providing efficient data storage and retrieval for your applications. I can help you model your data, establish relationships, and optimize database queries to ensure fast and reliable data access.",
      "icon": <FaDatabase />
    },
    {
      "id": 5,
      "title": "Front-end Development",
      "description": "Develop intuitive and responsive user interfaces using React.js. I can transform your designs into pixel-perfect, reusable components, implementing state management and handling data flow to create seamless user experiences.",
      "icon": <FaDesktop />
    },
    {
      "id": 6,
      "title": "Full Stack Development",
      "description": "Deliver end-to-end solutions by combining front-end and back-end development skills. From designing UI/UX interfaces to implementing server-side logic and database integration, I can build scalable and feature-rich applications.",
      "icon": <FaCodeBranch />
    },
    {
      "id": 7,
      "title": "Performance Optimization",
      "description": "Optimize the performance of your MERN stack applications by analyzing bottlenecks, identifying areas of improvement, and implementing optimization strategies. I can enhance application speed, reduce load times, and improve overall efficiency.",
      "icon": <FaRocket />
    },
    {
      "id": 8,
      "title": "Deployment",
      "description": "Ensure smooth deployment of your MERN stack applications by setting up scalable and secure hosting environments. I can assist with containerization, continuous integration/continuous deployment (CI/CD), and automate deployment processes using tools like Docker and Kubernetes.",
      "icon": <FaCloudUploadAlt />
    },
    {
      "id": 9,
      "title": "Maintenance and Support",
      "description": "Provide ongoing maintenance and support for your MERN stack applications. I offer bug fixing, security updates, feature enhancements, and timely support to ensure your applications remain stable and up-to-date.",
      "icon": <FaTools />
    },
    {
      "id": 10,
      "title": "Code Review and Consulting",
      "description": "Conduct thorough code reviews of MERN stack projects, identifying potential issues, and suggesting improvements. I can also provide consulting services, helping you make informed decisions about architecture, technology choices, and scalability.",
      "icon": <FaComments />
    }
  ]
  

const Services = () => {
    return (
        <div className="section-bg-1 dark:bg-dark-secondary">
            <div className="max-w-screen-xl mx-auto px-4">
                <SectionHeader
                    header="My"
                    headerSpan="Services"
                    subheader="Let's see what I can offer you as a web developer"
                    icon="https://learnwithsumit.com/_next/static/media/peep4.d500693a.svg"
                />

                <div className="grid grid-cols-300 gap-6">
                    {
                        services.map(service => (
                            <div data-aos="zoom-in-up" data-aos-duration="500" key={service.id} className="p-3 flex flex-col justify-center items-center bg-white-secondary dark:bg-dark-primary rounded-md shadow-sm border-border-primary dark:border-border-secondary hover:scale-105 duration-200 cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-accent-primary/30 dark:bg-accent-secondary/30 text-accent-primary dark:text-accent-secondary flex justify-center items-center mb-2">
                                    {service.icon}
                                </div>
                                <Typography className="text-center" variant="h5">
                                    {service.title}
                                </Typography>
                                <Typography className="text-center" variant="small">
                                    {service.description}
                                </Typography>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;