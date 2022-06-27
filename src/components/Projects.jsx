import React from "react";
import "./Projects.css";
import Netflix from "../images/black-project-netflix.png";
import Ecom from "../images/black-project-ecom.png";
import Todo from "../images/black-project-todo.png";
import Socmed from "../images/black-project-socmed.png";

const Projects = () => {
  return (
    <section
      name="projects"
      className="projects--contact--container py-[50px] w-full h-auto bg-[#fcfcfc]"
    >
      <div className="bg--container">
        <div className="projects--wrapper w-[90%] md:w-[80%] my-0 mx-auto py-[50px] ">
          <h3 className="text-3xl mb-[20px] font-medium text-[#0a192f]">
            Projects
          </h3>

          <h4 className="about--text font-regular mb-[12px] ">
            Feel free to take a look
            at the demo sites and their corresponding codes. I'd be happy to
            hear your thoughts about my work!
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
                    This project is an attempt to clone the popular movie
                    streaming app using React JS and Tailwind CSS for the
                    frontend component and Google’s Firebase for the backend.
                    The app features a Login / Signup functionality and an
                    option for the user to save preferred movies. The dataset
                    utilized was sourced from The Movie Database (TMDB) API.
                  </span>
                  <div className="buttons-holder mt-[8px] flex gap-[8px]">
                    <a
                      href="https://netflix-clone-beryl-six.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="py-[8px] px-[16px] rounded-md text-xs cursor-pointer font-medium bg-[#00d9db] text-black hover:bg-[#00b8bb] duration-300 border-[2px] border-solid border-[#00d9db]">
                        Live Site
                      </button>
                    </a>
                    <a
                      href="https://github.com/erwinjamescodes/netflix-clone"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="py-[8px] px-[16px] text-xs cursor-pointer font-medium text-[#00d9db] rounded-md border-[2px] border-solid border-[#00d9db] hover:bg-[#181616]">
                        View Code
                      </button>
                    </a>
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
                    This fully navigable and mobile-responsive frontend template for an
                    eCommerce Website was developed using React JS and customized
                    using Styled Components. The website’s routing mechanism is
                    made possible using the react-router-dom package.
                  </span>
                  <div className="buttons-holder mt-[8px] flex gap-[8px]">
                    <a
                      href="https://ecommerce-site-lake.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="py-[8px] px-[16px] rounded-md text-xs cursor-pointer font-medium bg-[#00d9db] text-black hover:bg-[#00b8bb] duration-300 border-[2px] border-solid border-[#00d9db]">
                        Live Site
                      </button>
                    </a>
                    <a
                      href="https://github.com/erwinjamescodes/ecommerce-site"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="py-[8px] px-[16px] text-xs cursor-pointer font-medium text-[#00d9db] rounded-md border-[2px] border-solid border-[#00d9db] hover:bg-[#181616]">
                        View Code
                      </button>
                    </a>
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
                    Built to help you organize your daily tasks, this web app
                    features a filtering mechanism to separate your
                    completed tasks from the unfinished ones. The app
                    automatically saves items placed by the user to the
                    browser’s local storage, allowing information to be
                    displayed even after the tab has been closed or refreshed.
                    Feel free to use this app anytime you want!
                  </span>
                  <div className="buttons-holder mt-[8px] flex gap-[8px]">
                    <a
                      href="https://todolist-sigma-gules.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="py-[8px] px-[16px] rounded-md text-xs cursor-pointer font-medium bg-[#00d9db] text-black hover:bg-[#00b8bb] duration-300 border-[2px] border-solid border-[#00d9db]">
                        Live Site
                      </button>
                    </a>
                    <a
                      href="https://github.com/erwinjamescodes/todolist"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="py-[8px] px-[16px] text-xs cursor-pointer font-medium text-[#00d9db] rounded-md border-[2px] border-solid border-[#00d9db] hover:bg-[#181616]">
                        View Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item-holder group">
              <div
                style={{ backgroundImage: `url(${Socmed})` }}
                className="group container rounded-md mx-auto content-div flex items-center justify-center "
              >
                <div className="opacity-0 group-hover:opacity-100 highlight w-[100%] h-[100%] flex items-center justify-center flex-col rounded-md">
                  <span className="text-sm text-white px-6 mb-2 text-center w-[80%] md:w-[70%]">
                    Exploring the development efficiency provided by Material UI
                    and its components, this attempt to replicate Facebook’s user
                    interface features an option to switch easily between dark
                    and light modes. In addition to this, clicking the “add”
                    button also triggers a modal for creating new posts.
                    However, as the project is still under development,
                    mapping new posts is still not available at this moment.
                  </span>
                  <div className="buttons-holder mt-[8px] flex gap-[8px]">
                    <a
                      href="https://socmed.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="py-[8px] px-[16px] rounded-md text-xs cursor-pointer font-medium bg-[#00d9db] text-black hover:bg-[#00b8bb] duration-300 border-[2px] border-solid border-[#00d9db]">
                        Live Site
                      </button>
                    </a>
                    <a
                      href="https://github.com/erwinjamescodes/socmed"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="py-[8px] px-[16px] text-xs cursor-pointer font-medium text-[#00d9db] rounded-md border-[2px] border-solid border-[#00d9db] hover:bg-[#181616]">
                        View Code
                      </button>
                    </a>
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
