import "./App.css";
import ContactMe from "./components/Contact/ContactMe";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Project";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <Project />
        <ContactMe />
      </div>

      <Footer />
    </>
  );
}

export default App;
