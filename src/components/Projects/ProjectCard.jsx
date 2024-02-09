import "./Project.css";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`project-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
{/*       <div className="project-icon">
        <img src={iconUrl} alt={title} />
      </div> */}

      <span>{title}</span>
    </div>
  );
};

export default ProjectCard;
