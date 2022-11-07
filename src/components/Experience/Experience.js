import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import { Timeline, TimelineEvent } from "react-event-timeline";

import "./experience.scss";

const Experience = () => {
  const data = [
    {
      year: "2014",
      time: "March 2014 - June 2014",
      title: "Web Developer Intern",
      company: "Yetkinsoft",
      desc: " - Designed web page interfaces with Photoshop and developed websites for customers",
      desc: " - Gained experience on Photoshop, HTML, CSS, JS, PHP and Web development processes",
    },
    {
      year: "2014",
      time: "July 2014 - Sept. 2014",
      title: "IT Intern",
      company: "Robert BOSCH GmbH",
      desc: "- Developed a pdf viewer application with C# for factory workers",
      desc2:
        "- Worked in a Agile Scrum team and gained knowledge about software life cycle and agile methodologies",
    },
    {
      year: "2014",
      time: "Sept. 2014 - April 2016",
      title: "Front End Developer",
      company: "SMOD Consulting",
      desc: "- Developed websites from design team’s web designs for several clients",
      desc2:
        "- Converted Photoshop designs into web applications with HTML, CSS",
      desc3:
        "- Assisted in the monitoring and reporting for website traffic and performance",
      desc4:
        "- Created HTML e-mail templates and newsletters for e-mail marketing campaigns",
    },
    {
      year: "2017",
      time: "April 2017 - Aug. 2021",
      title: "Front End Developer",
      company: "Garanti BBVA Bank",
      desc: "- Developed web components using cells and Polymer/Lit element and developed applications with using ReactJS",
      desc2:
        "- Transformed design team’s UX wireframes from Photoshop or Sketch exports into responsive applications",
      desc3:
        "Designed and developed frontend architecture for more than 30 websites, applications, atm machines and chatbot projects",
      desc4: "Improved performance and SEO of websites and applications",
      desc5:
        "Revamped UI and app interface for banking websites with more than 10,000,000 unique visitors per month",
      tech: "ReactJs, Javascript, JQuery, HTML, CSS(SCSS), Gulp, Webpack, Mocha, Sinon, Chai,Git(Bitbucket), NPM",
    },
    {
      year: "2021   ",
      time: "Aug. 2021- Present",
      title: "Front End Developer",
      company: "SoftServe - Bulgaria",
      desc: "- Transformed design team’s UX wireframes from InVision exports into applications",
      desc2:
        "- Implemented new features for cybersecurity testing parts to project",
      desc3: "- Implemented unit tests",
      desc4: "- Fixed existing issues, code refactoring",
      desc5:
        "- Transformed old project codes with using ES6 for new architecture design",
      tech: "ReactJs, Redux, Javascript, TypeScript, HTML, CSS(SCSS), LESS, Webpack, MobX, Jest, Enzyme, Git(Bitbucket), NPM, Jenkins",
    },
  ];

  const [current, setCurrent] = useState(4);
  const [previous, setPrevious] = useState(0);
  return (
    <div id="experience" className="section experience-section">
      <h2>Experience</h2>
      <div className="timeline-container">
        <div className="horizontal-container">
          <HorizontalTimeline
            getLabel={(data) => data}
            index={current}
            indexClick={(index) => {
              setCurrent(index);
              setPrevious(current);
            }}
            values={data.map((el) => el.year)}
            maxEventPadding={20}
            minEventPadding={20}
            styles={{
              background: "white",
              foreground: "#BD3253",
              outline: "#BFBFBF",
              margin: "0 auto",
              textAlign: "center",
            }}
          />
        </div>
        <div className="desc-container">
          <div className="title">{data[current].title}</div>
          <div className="company">
            {data[current].company} | {data[current].time}
          </div>
          <div className="desc">{data[current].desc}</div>
          <div className="desc">{data[current].desc2}</div>
          <div className="desc">{data[current].desc3}</div>
          <div className="desc">{data[current].desc4}</div>
          <div className="desc">{data[current].desc5}</div>
          <div className="tech">{data[current].tech}</div>
        </div>

        <div className="timeline-mobile">
          <Timeline>
            {data.map((el) => {
              return <TimelineEvent title={el.year}>{el.desc}</TimelineEvent>;
            })}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
