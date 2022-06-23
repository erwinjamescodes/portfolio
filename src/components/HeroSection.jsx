import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import { Link } from "react-scroll";

const HeroSection = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const texts = [
      "Urban Planner.        ",
      "Cyclist.        ",
      "Anime Enthusiast.        ",
      "Kpop Fan. I love Twice!        ",
      "Meme Connoisseur.        ",
    ];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      setText(letter);
      if (letter.length === currentText.length) {
        count++;
        index = 0;
      }
      setTimeout(type, 100);
    })();
  }, []);

  return (
    <main
      name="home"
      className="text-white w-full h-screen my-0 mx-auto pt-[200px] bg-[#0a192f]"
    >
      <div className="main--wrapper w-[80%] my-0 mx-auto h-[calc(100%-70px)] relative">
        <h3 className="title--intro text-2xl sm:text-3xl md:text-3xl">
          Hi, my name is
        </h3>
        <h1 className="title--name text-[#00d9db] text-5xl sm:text-7xl md:text-8xl font-medium pt-2 md:ml-[-5px]">
          Erwin James.
        </h1>

        <div className="dynamic--wrapper my-[30px] lg:flex ">
          <div className="static-txt text-xl sm:text-2xl md:text-3xl ">
            I'm a{" "}
            <span className="frontend text-[#00d9db] font-medium ">
              Frontend Developer
            </span>{" "}
            &&
          </div>
          <div
            className="list--description text-xl sm:text-2xl md:text-3xl lg:ml-[10px] after:border-r-[2px] after:border-r-white after:border-r-solid 
          "
          >
            {text}
          </div>
        </div>
        <div className="button-wrapper flex gap-[10px]">
          <button className="linkedin py-[5px] px-[10px] text-xs md:text-lg flex gap-[6px] items-center cursor-pointer font-medium bg-[#00d9db] text-black rounded-md hover:bg-[#00b8bb] duration-300">
            <i className="fa-brands fa-linkedin" />
            Let's Connect!
          </button>

          <Link to="projects" smooth={true} duration={500}>
            <button className="projects-btn py-[5px] px-[10px] text-xs md:text-lg flex gap-[6px] items-center cursor-pointer font-medium text-[#00d9db] rounded-md border-[2px] border-solid border-[#00d9db] hover:bg-[#18273b] duration-300">
              <i className="fa-solid fa-laptop-code"></i>
              View Projects
            </button>
          </Link>
        </div>

        <div className="socials hidden md:flex">
          <a
            href="https://www.linkedin.com/in/erwin-james-caluag-6b2304150/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social--container">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </a>
          <a
            href="https://github.com/erwinjamescodes"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social--container">
              <i className="fa-brands fa-github"></i>
            </div>
          </a>
          <a
            href="https://twitter.com/erwinjamescodes"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social--container">
              <i className="fa-brands fa-twitter"></i>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
