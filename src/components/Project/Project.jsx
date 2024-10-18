import "./Project.scss";

const Project = ({ project }) => {
  return (
    <>
      <h2>
        <a href={project.link}>{project.title}</a>
      </h2>
      <p>{project.description}</p>
    </>
  );
};

export default Project;
