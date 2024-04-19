import { useState } from "react";
import "material-symbols";
import MobileNav from "./MobileNav/MobileNav";
import logo from "../../assets/Black-Logo.mp4";
// import logo1 from "../../assets/White-Logo.mp4";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          {/* Logo Image comes here */}
          {/* <img className="logo" src={logo} alt="logo" /> */}
          <video className="logo" muted autoPlay loop >
            <source src={logo} type="video/mp4" />
          </video>

          <ul>
            <li>
              <a href="#home" className="menu-item">Home</a>
            </li>
            <li>
              <a href="#skills" className="menu-item">Skills</a>
            </li>
            <li>
              <a href="#experience" className="menu-item">Professional Experience</a>
            </li>
            <li>
              <a href="#projects" className="menu-item">Projects</a>
            </li>
            <li>
              <a href="#contact className="menu-item">Contact Me</a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.7rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
