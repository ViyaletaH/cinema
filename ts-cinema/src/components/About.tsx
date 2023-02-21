import "./myStyles.css";

const About = () => {
  return (
    <div className="about">
        <div className="about-container">
      <a href="https://vk.com/asia_story">
        <div className="vkontakte"></div>
      </a>
      <div className="about-donate">
        <a href="#">
          <img src={require("./images/donut2.png")} alt="logo" width="40px" />
        </a>
      </div>
      <a href="https://t.me/the_art_of_love_asia">
        <div className="telegram"></div>
      </a>
      </div>
      <a href="https://github.com/ViyaletaH/cinema/issues/new">
        <span className="report">report bug</span>
      </a>
    </div>
  );
};

export default About;
