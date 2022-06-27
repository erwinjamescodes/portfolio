import React from "react";
import "./About.css";
//import Techstack from "./Techstack";
//import "./Techstack.css";
//import Bootstrap from "../images/Bootstrap.png";
import CSS from "../images/css3.png";
import Figma from "../images/figma.png";
import Firebase from "../images/firebase.png";
// import Git from "../images/git.png";
//import Github from "../images/github.png";
import Html from "../images/html.png";
import Js from "../images/js.png";
import Mui from "../images/MUI.png";
import ReactLogo from "../images/react.png";
import Tailwind from "../images/Tailwind.png";
import VsCodeLogo from "../images/vscode.png";
import Github from "../images/github.png";

const About = () => {
  return (
    <section name="about" className="about pt-[100px] pb-[50px] w-full h-auto ">
      <div className="about-wrapper w-[90%] md:w-[80%] my-0 mx-auto">
        <h3 className="text-3xl mb-[20px] font-medium text-[#0a192f]">
          About Me
        </h3>
        <div className="content lg:grid grid-cols-5 gap-8">
          <div className="content--left mb-[20px] col-span-3 ">
            <h4 className="about--text font-bold mb-[12px] ">
              Hello, I am Erwin James! I enjoy transforming plans, designs, and
              ideas into reality.
            </h4>
            <p className="pr-[16px]">
              Being an Urban Planner by profession, I ventured on a mission to
              search for solutions to make smarter and more resilient
              communities – an endless quest for technological innovations which
              eventually led me to the fascinating world of Web Development.
            </p>
            <p className="pr-[16px] mt-[12px] ital">
              After all, the web is just an evolved form of the communities that
              we know. We connect, we communicate, we interact. Everything just
              turned digital.
            </p>
            <p className="pr-[16px] mt-[12px]">
              Today, my mission still remains, but I am more focused now on
              developing beautifully designed websites and web applications that
              foster seamless and worthwhile digital community experiences.
              Hungry to further enhance my knowledge in this field, I am open to
              working in environments where I can learn, grow, and contribute
              more.
            </p>
          </div>
          <div className="content--right col-span-2">
            <h4 className="logo--text font-bold mb-[12px] ">My Techstack</h4>

            {/* LOGOS */}

            <div className="logos--wrapper ">
              <div className="logo--text--holder">
                <div className="logo--container">
                  <img src={Html} alt="HTML" />
                </div>
                <h5>HTML</h5>
              </div>
              <div className="logo--text--holder">
                <div className="logo--container">
                  <img src={CSS} alt="Css" />
                </div>
                <h5>CSS</h5>
              </div>
              <div className="logo--text--holder">
                <div className="logo--container">
                  <img src={Js} alt="Javascript" />
                </div>
                <h5>Javascript</h5>
              </div>
              <div className="logo--text--holder">
                <div className="logo--container">
                  <img src={ReactLogo} alt="React" />
                </div>
                <h5>React JS</h5>
              </div>
              <div className="logo--text--holder">
                <div className="logo--container">
                  <img src={Firebase} alt="Firebase" />
                </div>
                <h5>Firebase</h5>
              </div>
              <div className="logo--text--holder">
                <div className="logo--container">
                  <img src={Mui} alt="Material UI" />
                </div>
                <h5>Material UI</h5>
              </div>

              <div className="logo--text--holder">
                <div className="logo--container">
                  <img src={Tailwind} alt="Tailwind CSS" />
                </div>
                <h5>Tailwind</h5>
              </div>
              <div className="logo--text--holder">
                <div className="logo--container">
                  <img src={Github} alt="Github" id="github" />
                </div>
                <h5>Github</h5>
              </div>

              <div className="logo--text--holder">
                <div className="logo--container">
                  <img src={VsCodeLogo} alt="Visual Studio Code" id="vscode" />
                </div>
                <h5>VS Code</h5>
              </div>
              <div className="logo--text--holder">
                <div className="logo--container">
                  <img src={Figma} alt="Figma" id="figma" />
                </div>
                <h5>Figma</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
