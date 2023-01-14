import html from "../images/HTML.png";
import css from "../images/CSS.png";
import js from "../images/js.png";
import ReactLogo from "../images/react.png";
import github from "../images/gith.png";

export default function Skill() {
  return (
    <div className="skill">
      <h1>Skill</h1>
      <section className="skill--card">
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={js} alt="js" />
        <img src={ReactLogo} alt="ReactLogo" />
        <img src={github} alt="github" />
      </section>
    </div>
  );
}