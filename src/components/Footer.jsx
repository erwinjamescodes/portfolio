import React from "react";
import EJLogo from "../images/logo-white-teal.png";

const Footer = () => {
  return (
    <section className="footer w-full h-[70px] bg-[#0a192f] py-[20px]">
      <div className="footer--wrapper flex justify-center items-center text-white flex flex-col">
        <p className="text-xs">© 2022 Copyright | All Rights Reserved</p>
        <p className="text-xs"> Made by Erwin James Caluag</p>
      </div>
    </section>
  );
};

export default Footer;
