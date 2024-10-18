import Content from "../../components/Content/Content";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./HomePage.scss";
import data from "../../data.json";

const HomePage = () => {
  return (
    <section id="home">
      <header>
        <h2>Aashutosh Taikar</h2>
      </header>

      <div className="home-content">
        <Sidebar />

        <Content>
          <div className="about">
            <p>{data.homePage.about}</p>
          </div>

          <div className="tools">
            <b>{data.homePage.tools.title}</b>
            {data.homePage.tools.contents.map((c, index) => (
              <p key={index}>{c}</p>
            ))}
          </div>
        </Content>
      </div>
    </section>
  );
};

export default HomePage;
