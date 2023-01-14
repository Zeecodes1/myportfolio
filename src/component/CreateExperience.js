import work from "../experienceData";
import Experience from "./Experience";

function CreateServices() {
  return (
    <div className="experience">
      <h1>My Experience</h1>
      <div className="experience--container">
        {work.map((workDetails) => (
          <Experience
            key={workDetails.id}
            company={workDetails.company}
            year={workDetails.year}
            role={workDetails.role}
          />
        ))}
      </div>
    </div>
  );
}

export default CreateServices;