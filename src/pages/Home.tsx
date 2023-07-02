import Hero from "../components/Home/Hero/Hero";
import Footer from "../components/shared/Footer/Footer";
import Speciality from "../components/Home/Speciality/Speciality";
import About from "../components/Home/About/About";
import Skills from "../components/Home/Skills/Skills";
import Projects from "../components/Home/Projects/Projects";
import Services from "../components/Home/Services/Services";
import Contact from "../components/Home/Contact/Contact";
import Articles from "../components/Home/Articles/Articles";
import ProblemSolving from "../components/Home/ProblemSolving/ProblemSolving";

import { Element } from "react-scroll";

const Home = () => {
  return (
    <div className="absolute top-0 left-0 right-0">
      <Element name="hero" className="section">
        <Hero />
      </Element>

      <Element name="speciality" className="section">
        <Speciality />
      </Element>

      <Element name="skills" className="section">
        <Skills />
      </Element>

      <Element name="about" className="section">
        <About />
      </Element>

      <Element name="services" className="section">
        <Services />
      </Element>

      <Element name="projects" className="section">
        <Projects />
      </Element>

      <Element name="problem-solving" className="section">
        <ProblemSolving />
      </Element>

      <Element name="articles" className="section">
        <Articles />
      </Element>

      <Element name="contact" className="section">
        <Contact />
      </Element>

      <Element name="footer" className="section">
        <Footer />
      </Element>
    </div>
  );
};

export default Home;
