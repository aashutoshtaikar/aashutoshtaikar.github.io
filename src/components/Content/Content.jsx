import "./Content.scss";

const Content = ({ children }) => {
  return (
    <section id="content">
      <article>{children}</article>
    </section>
  );
};

export default Content;
