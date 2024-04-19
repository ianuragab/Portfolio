import { useState } from "react";
import { PROJECTS } from "../../utils/data";
import ProjectCard from "./ProjectCard";
import ProjectCardInfo from "./ProjectCardInfo";
import "./Project.css";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);

  const handleSelectProject = (data) => {
    setSelectedProject(data);
  };

  return (
    <section id="projects" className="project-container">
      <h5>Projects</h5>

      <div className="project-content">
        <div className="projects">
          {PROJECTS.map((item) => (
            <ProjectCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedProject.title === item.title}
              onClick={() => {
                handleSelectProject(item);
              }}
            />
          ))}
        </div>

        <div className="projects-info">
          <ProjectCardInfo 
            heading={selectedProject.title}
            details={selectedProject.desc}
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
