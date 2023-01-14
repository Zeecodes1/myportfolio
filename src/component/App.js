import SharedLayout from "./SharedLayout";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import CreateExperience from "./CreateExperience";
import Skill from "./Skill";
import Error from "./Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="experience" element={<CreateExperience />} />
            <Route path="skill" element={<Skill />} />
            <Route path="project" element={<Project />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}