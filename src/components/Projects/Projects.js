import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import todo from "../../assets/others/project-todo.gif";

import "./projects.scss";
const Projects = () => {
  const PROJECTS = [
    {
      title: "Personal Portfolio",
      desc: "This project is too much beautiful believe me its awesome incredible amazing super wowww omg.",
      techs: "REACT, SCSS, HTML",
      githubLink: "www.github.com",
      demoLink: "www.google.com",
      img: "https://github.com/gokhanozt/portfolio/raw/main/src/assets/img/ss1.png?raw=true",
    },
    {
      title: "ToDo App",
      desc: "This project is too much beautiful believe me its awesome incredible amazing super wowww omutiful believe me its awesome incredible amazing super wowww omutiful believe me its awesome incredible amazing super wowww omutiful believe me its awesome incredible amazing super wowww omg.",
      techs: "REACT, SCSS, HTML",
      githubLink: "www.github.com",
      demoLink: "www.google.com",
      img: todo,
    },
    {
      title: "Calculator",
      desc: "This project muah.",
      techs: "REACT",
      githubLink: "www.github.com",
      demoLink: "www.google.com",
      img: "https://cdn.dribbble.com/users/1429653/screenshots/11296741/media/b8a86e89a8110d0715c93ae0807a3871.png?compress=1&resize=1600x1200&vertical=top",
    },
    {
      title: "Memory Card Game",
      desc: "This project is too much beautiful believe me its awesome incredible amazing super wowww omg.",
      techs: "REACT, SCSS, HTML",
      githubLink: "www.github.com",
      demoLink: "www.google.com",
      img: "https://github.com/gokhanozt/react-memory-card-game/raw/main/screenshots/ss-dark2.png?raw=true",
    },
    {
      title: "CSS Animation",
      desc: "This project is too much beautiful believe me its awesome incredible amazing super wowww omg.",
      techs: "REACT, SCSS, HTML",
      githubLink: "www.github.com",
      demoLink: "www.google.com",
      img: "https://cdn.dribbble.com/userupload/2554103/file/original-151ae08c8d76ccd31c755adf437575da.gif?compress=1&resize=1504x1128",
    },
    {
      title: "Weather App",
      desc: "its awesome incredible amazing super wowww omg.",
      techs: "REACT, SCSS, HTML",
      githubLink: "www.github.com",
      demoLink: "www.google.com",
      img: "https://cdn.dribbble.com/users/486903/screenshots/10524261/media/ba356e4726f3b28ae854cddf45a43bc9.png?compress=1&resize=1600x1200&vertical=top",
    },
    {
      title: "Netflix React Clone",
      desc: "its awesome incredible amazing super wowww omg.",
      techs: "REACT, SCSS, HTML",
      githubLink: "www.github.com",
      demoLink: "www.google.com",
      img: "https://cdn.dribbble.com/users/3506230/screenshots/16626652/media/2d756a0f3075734a3e35c8f1204f9bed.png?compress=1&resize=1600x1200&vertical=top",
    },
    {
      title: "Linkedin React Clone",
      desc: "its awesome incredible amazing super wowww omg.",
      techs: "REACT, SCSS, HTML",
      githubLink: "www.github.com",
      demoLink: "www.google.com",
      img: "https://cdn.dribbble.com/users/5084254/screenshots/18602988/media/daa83f993c412471716cb901fcaae331.jpg?compress=1&resize=1600x1200&vertical=top",
    },
    {
      title: "Music Player",
      desc: "Be ready to delete rust of your ears",
      techs: "REACT, SCSS, HTML",
      githubLink: "www.github.com",
      demoLink: "www.google.com",
      img: "https://cdn.dribbble.com/users/364603/screenshots/16856314/media/9545c17229064f382d0fe078a0455031.png?compress=1&resize=1600x1200&vertical=top",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 800,
        slidesToShow: 2,
      },
      {
        breakpoint: 10000, // a unrealistically big number to cover up greatest screen resolution
        slidesToShow: 4,
        settings: "unslick",
      },
    ],
  };
  return (
    <>
      <div id="projects" className="section projects-section">
        <h2>Projects</h2>

        <div className="projects">
          <Slider {...settings}>
            {PROJECTS.map((project) => (
              <div className="project-card">
                <div className="img-container">
                  <img src={project.img} alt="" />
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <h4>{project.title}</h4>
                  </div>
                  <div className="card-info">
                    <span className="desc">{project.desc}</span>
                    <div className="card-tech">
                      <span>{project.techs}</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="github-link">
                      <a href={project.githubLink}>Source Code</a>
                    </div>
                    <div className="demo-link">
                      <a href={project.demoLink}>Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Projects;
