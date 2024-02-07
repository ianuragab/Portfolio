/* eslint-disable react/prop-types */

import "./Project.css";

const ProjectCardInfo = ({ heading, details }) => {
  return (
    <div className="project-info-card">
      <h6>{heading}</h6>

      <div className="project-info-content">
        <ul>
          {details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCardInfo;
