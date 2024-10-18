import { useEffect, useState } from "react";
import data from "../../data.json";
import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";
import "./ProjectsPage.scss";
import Project from "../../components/Project/Project";
import { useParams } from "react-router-dom";

const ProjectsPage = () => {
  const { category } = useParams();

  const [projectsCategory, setProjectsCategory] = useState();

  const getProjectsByCategory = () => {
    const projectsCategory = data.projectsPage.find(
      (p) => p.category === category
    );
    return projectsCategory;
  };

  useEffect(() => {
    if (category) {
      setProjectsCategory(getProjectsByCategory());
    } else {
      let projectsCategory = {
        id: 0,
        title: "All",
        category: "all",
        projects: [],
      };

      let idCount = 0;
      data.projectsPage.forEach((p) => {
        p.projects.forEach((pro) => {
          projectsCategory.projects.push({ ...pro, id: idCount });
          idCount++;
        });
      });
      setProjectsCategory(projectsCategory);
    }
  }, [category]);

  return (
    <section id="projects">
      <header>
        <h2>Projects - {projectsCategory?.title}</h2>
      </header>

      <div className="projects-content">
        <Sidebar />

        <Content>
          {projectsCategory?.projects?.map((p) => (
            <Project project={p} key={p.id} />
          ))}
        </Content>
      </div>
    </section>
  );
};

export default ProjectsPage;
