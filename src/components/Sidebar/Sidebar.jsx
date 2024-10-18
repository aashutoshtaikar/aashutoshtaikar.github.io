import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <ul>
        <li>
          <a
            href="https://github.com/aashutoshtaikar/"
            target="https://github.com/aashutoshtaikar/"
          >
            GitHub <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aashutoshtaikar/"
            target="https://www.linkedin.com/in/aashutoshtaikar/"
          >
            LinkedIn <i className="fab fa-linkedin"></i>{" "}
          </a>
        </li>
        <li>
          <a href="mailto:ataikar@outlook.com">
            {" "}
            ataikar@outlook.com <i className="material-icons">email</i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
