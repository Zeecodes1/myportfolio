export default function Experience(props) {
    return (
      <div className="experience--card">
        <h3>{props.company}</h3>
        <p>{props.year}</p>
        <p>{props.role}</p>
      </div>
    );
  }