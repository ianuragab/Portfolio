import "./MobileNav.css";
import logo from "../../../assets/Black-Logo.mp4";

// eslint-disable-next-line react/prop-types
const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          {/* Logo Image comes here */}
          <video className="logo" muted autoPlay loop >
            <source src={logo} type="video/mp4" />
          </video>

          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>

            <li>
              <a className="menu-item">Skills</a>
            </li>

            <li>
              <a className="menu-item">Professional Experience</a>
            </li>

            <li>
              <a className="menu-item">Projects</a>
            </li>

            <li>
              <a className="menu-item">Contact Me</a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
