import React, { useState } from "react";
import "./Navbar.css";
import EJLogo from "../images/logo-white-teal.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleToggle = () => setNav((prev) => !prev);

  return (
    <nav className="nav--container fixed w-full h-[70px] flex justify-between items-center bg-[#010812] text-white z-10">
      <div className="nav--wrapper flex justify-between items-center w-[100%] md:w-[90%] h-[100%] mx-[auto] p-4 md:p-8">
        <Link to="home" smooth={true} duration={500}>
          <div className="left flex justify-between items-center gap-2 cursor-pointer">
            <img src={EJLogo} alt="logo" style={{ width: "35px" }} />
            <h3 className="font-medium text-xl ">erwinjames</h3>
          </div>
        </Link>

        {/* MENU */}
        <div className="right hidden md:flex">
          <ul className="flex items-center gap-[32px] text-[16px] cursor-pointer hidden md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              {" "}
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <a
              href="https://drive.google.com/file/d/1mFCpCgAnhXoKt5LbSHS9FCY2s_4sSexk/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <li className="resume">Resume</li>
            </a>
          </ul>
        </div>

        {/* HAMBURGER */}
        <div onClick={handleToggle} className="md:hidden z-10">
          {!nav ? (
            <i className="fa-solid fa-bars text-xl"></i>
          ) : (
            <i className="fa-solid fa-xmark text-2xl"></i>
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#010812] flex flex-col justify-center items-center text-center md:hidden"
          }
        >
          <ul className="cursor-pointer ">
            <li className="py-6 text-2xl hover:text-[#00d9db] ">
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={handleToggle}
              >
                Home
              </Link>
            </li>
            <li className="py-6 text-2xl hover:text-[#00d9db]">
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={handleToggle}
              >
                About
              </Link>
            </li>
            <li className="py-6 text-2xl hover:text-[#00d9db]">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={handleToggle}
              >
                Projects
              </Link>
            </li>
            <li className="py-6 text-2xl hover:text-[#00d9db]">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={handleToggle}
              >
                Contact
              </Link>
            </li>
            <a
              href="https://drive.google.com/file/d/1mFCpCgAnhXoKt5LbSHS9FCY2s_4sSexk/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <li className="py-6 text-2xl hover:bg-[#00d9db] resume">
                Resume
              </li>
            </a>

            <li className="mt-[60px]">
              <div className="socmed--container flex items-center justify-center gap-[18px]">
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
