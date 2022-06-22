import React from "react";
import "./About.css";
//import Techstack from "./Techstack";
//import "./Techstack.css";
//import Bootstrap from "../images/Bootstrap.png";
import CSS from "../images/css3.png";
import Figma from "../images/figma.png";
import Firebase from "../images/firebase.png";
import Git from "../images/git.png";
//import Github from "../images/github.png";
import Html from "../images/html.png";
import Js from "../images/js.png";
import Mui from "../images/MUI.png";
import ReactLogo from "../images/react.png";
import Tailwind from "../images/Tailwind.png";
import VsCodeLogo from "../images/vscode.png";

const About = () => {
  return (
    <section name="about" className="about pt-[100px] pb-[50px] w-full h-auto ">
      <div className="about-wrapper w-[80%] my-0 mx-auto">
        <h3 className="text-3xl mb-[20px] font-medium text-[#0a192f]">
          About Me
        </h3>
        <div className="content lg:grid grid-cols-5 gap-8">
          <div className="content--left mb-[20px] col-span-3 ">
            <h4 className="about--text font-bold mb-[12px] ">
              Hello! Thank you for visiting my page. Please feel free to take a
              look around.
            </h4>
            <p className="pr-[16px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              voluptatum, minus modi unde ad sunt iste at obcaecati tempore
              libero aliquam quia neque eaque expedita veritatis tempora! Quos
              ipsa soluta neque minus repellendus inventore, pariatur eos velit
              distinctio! Aspernatur, dolorem. Delectus ab quas dolores
              perspiciatis ipsam culpa pariatur assumenda ex numquam eos
              corrupti voluptatem asperiores maiores, labore iusto, porro, nam
              excepturi distinctio nesciunt voluptatibus fugiat necessitatibus
              est doloribus ea. Accusantium assumenda corrupti voluptates
              obcaecati voluptatibus tempora reiciendis tenetur error! Aperiam,
              laboriosam nulla. Minus officiis rem dolorem impedit adipisci,
              explicabo laudantium nostrum pariatur quisquam alias qui voluptas
              iusto excepturi modi mollitia?
            </p>
          </div>
          <div className="content--right col-span-2">
            <h4 className="logo--text font-bold mb-[12px]">
              Here are a few technologies that I've been using recently:
            </h4>

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
                  <img src={Git} alt="Git" id="git" />
                </div>
                <h5>Git</h5>
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
