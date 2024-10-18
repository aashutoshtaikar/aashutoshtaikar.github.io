import { Link, useNavigate } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div id="topnav">
      <Link to={"/"}>
        <i className="fas fa-home"></i> Home
      </Link>
      <div className="dropdown">
        <button className="dropbtn" onClick={() => navigate("/projects")}>
          Projects <i className="fas fa-project-diagram"></i>
          <i className="fa fa-caret-down"></i>
        </button>

        <div className="dropdown-content">
          <Link to={"/projects/web"} target="_self">
            Web - Java, GoLang
          </Link>
          <Link to={"/projects/cpp"} target="_self">
            Systems - C/C++
          </Link>
          <Link to={"/projects/misc"} target="_self">
            Misc
          </Link>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          Resume
          <i className="fab fa-dochub"></i>
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link href="#" target="_self">
            View
          </Link>
          <Link href="#" target="_self">
            Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
