import React from "react";
import "./Projects.css";
import Netflix from "../images/black-project-netflix.png";
import Ecom from "../images/black-project-ecom.png";
import Todo from "../images/black-project-todo.png";

const Projects = () => {
  return (
    <section
      name="projects"
      className="projects--contact--container py-[50px] w-full h-auto bg-[#fcfcfc]"
    >
      <div className="bg--container">
        <div className="projects--wrapper w-[80%] my-0 mx-auto py-[50px] ">
          <h3 className="text-3xl mb-[20px] font-medium text-[#0a192f]">
            Projects
          </h3>

          <h4 className="about--text font-regular mb-[12px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            delectus beatae quasi explicabo iure inventore!
          </h4>
          {/* Grid items holder */}
          <div className="grid md:grid-cols-2 items-center gap-[16px]">
            <div className="grid-item-holder group">
              <div
                style={{ backgroundImage: `url(${Netflix})` }}
                className="group container rounded-md mx-auto content-div flex items-center justify-center  "
              >
                <div className="opacity-0 group-hover:opacity-100 highlight w-[100%] h-[100%] flex items-center justify-center flex-col rounded-md">
                  <span className="text-sm text-white px-6 mb-2 text-center w-[80%] md:w-[70%]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta minima repellat, quisquam reprehenderit, ipsa
                    temporibus nemo reiciendis ab debitis et impedit eos eum
                    voluptas? Repudiandae?
                  </span>
                  <div className="buttons-holder mt-[8px] flex gap-[8px]">
                    <button className="py-[8px] px-[16px] rounded-md text-xs cursor-pointer font-medium bg-[#00d9db] text-black hover:bg-[#00b8bb] duration-300">
                      Live Site
                    </button>
                    <button className="py-[8px] px-[16px] text-xs cursor-pointer font-medium text-[#00d9db] rounded-md border-[2px] border-solid border-[#00d9db] hover:bg-[#181616]">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item-holder group">
              <div
                style={{ backgroundImage: `url(${Ecom})` }}
                className="group container rounded-md mx-auto content-div flex items-center justify-center "
              >
                <div className="opacity-0 group-hover:opacity-100 highlight w-[100%] h-[100%] flex items-center justify-center flex-col rounded-md">
                  <span className="text-sm text-white px-6 mb-2 text-center w-[80%] md:w-[70%]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta minima repellat, quisquam reprehenderit, ipsa
                    temporibus nemo reiciendis ab debitis et impedit eos eum
                    voluptas? Repudiandae?
                  </span>
                  <div className="buttons-holder mt-[8px] flex gap-[8px]">
                    <button className="py-[8px] px-[16px] rounded-md text-xs cursor-pointer font-medium bg-[#00d9db] text-black hover:bg-[#00b8bb] duration-300">
                      Live Site
                    </button>
                    <button className="py-[8px] px-[16px] text-xs cursor-pointer font-medium text-[#00d9db] rounded-md border-[2px] border-solid border-[#00d9db] hover:bg-[#181616]">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item-holder group">
              <div
                style={{ backgroundImage: `url(${Todo})` }}
                className="group container rounded-md mx-auto content-div flex items-center justify-center "
              >
                <div className="opacity-0 group-hover:opacity-100 highlight w-[100%] h-[100%] flex items-center justify-center flex-col rounded-md">
                  <span className="text-sm text-white w-[80%] md:w-[70%] mb-2 text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta minima repellat, quisquam reprehenderit, ipsa
                    temporibus nemo reiciendis ab debitis et impedit eos eum
                    voluptas? Repudiandae?
                  </span>
                  <div className="buttons-holder mt-[8px] flex gap-[8px]">
                    <button className="py-[8px] px-[16px] rounded-md text-xs cursor-pointer font-medium bg-[#00d9db] text-black hover:bg-[#00b8bb] duration-300">
                      Live Site
                    </button>
                    <button className="py-[8px] px-[16px] text-xs cursor-pointer font-medium text-[#00d9db] rounded-md border-[2px] border-solid border-[#00d9db] hover:bg-[#181616]">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item-holder group">
              <div
                style={{ backgroundImage: `url(${Todo})` }}
                className="group container rounded-md mx-auto content-div flex items-center justify-center "
              >
                <div className="opacity-0 group-hover:opacity-100 highlight w-[100%] h-[100%] flex items-center justify-center flex-col rounded-md">
                  <span className="text-sm text-white px-6 mb-2 text-center w-[80%] md:w-[70%]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta minima repellat, quisquam reprehenderit, ipsa
                    temporibus nemo reiciendis ab debitis et impedit eos eum
                    voluptas? Repudiandae?
                  </span>
                  <div className="buttons-holder mt-[8px] flex gap-[8px]">
                    <button className="py-[8px] px-[16px] rounded-md text-xs cursor-pointer font-medium bg-[#00d9db] text-black hover:bg-[#00b8bb] duration-300">
                      Live Site
                    </button>
                    <button className="py-[8px] px-[16px] text-xs cursor-pointer font-medium text-[#00d9db] rounded-md border-[2px] border-solid border-[#00d9db] hover:bg-[#181616]">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
