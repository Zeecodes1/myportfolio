import { Link } from "react-router-dom";
import logo from "../images/olarotimi-logo.png";

export default function Nav() {
  return (
    <div className="Nav">
      <Link to="/">
        <img src={logo} alt="my-logo" className="logo" />
      </Link>
      <nav className="nav--bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="experience">Experience</Link>
          </li>
          <li>
            <Link to="skill">Skill</Link>
          </li>
          <li>
            <Link to="project">Project</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );