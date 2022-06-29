import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const inputNameHandler = (e) => {
    setNameValue(e.target.value);
  };
  const inputEmailHandler = (e) => {
    setEmailValue(e.target.value);
  };
  const inputMessageHandler = (e) => {
    setMessageValue(e.target.value);
  };

  useEffect(() => {
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
  }, []);

  return (
    <section
      name="contact"
      className="w-full h-auto pt-[100px] pb-[100px] projects--contact--container"
    >
      <div className="contact--wrapper w-[90%] md:w-[80%] h-[100%] mx-auto">
        <h3 className="text-3xl mb-[20px] font-medium text-[#0a192f]">
          Contact
        </h3>
        <div className="contact--main w-[100%] h-[70%] md:grid grid-cols-2">
          <div className="contact--text md:w-[95%] ">
            <div className="texts">
              <p className="max-w-[400px]">
                Let's get in touch!
                <br></br>
                <br></br>
                Whether you just want to say “Hi!”, talk about Web Development,
                see if we can build amazing projects together, or simply talk
                about our common interests -- please do not hesitate to shoot me
                a message through this contact form.
                <br></br>
                <br></br>
                You may also reach me through the following channels:
              </p>
              <p className=" mt-[16px]">Email:</p>
              <a href="mailto:egcaluag@gmail.com">
                <p className="font-bold ">egcaluag@gmail.com</p>
              </a>
              <div className="contact--social--holder mt-[12px] flex gap-[8px]">
                <a
                  href="https://www.linkedin.com/in/erwin-james-caluag-6b2304150/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon-holder h-[35px] w-[35px] bg-[#e6e6e6] rounded-[50%] flex items-center justify-center cursor-pointer ">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                </a>
                <a
                  href="https://github.com/erwinjamescodes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon-holder h-[35px] w-[35px] bg-[#e6e6e6] rounded-[50%] flex items-center justify-center cursor-pointer ">
                    <i className="fa-brands fa-github"></i>
                  </div>
                </a>
                <a
                  href="https://twitter.com/erwinjamescodes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon-holder h-[35px] w-[35px] bg-[#e6e6e6] rounded-[50%] flex items-center justify-center cursor-pointer ">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact--form mt-[20px] md:mt-[0px] ">
            <form
              method="POST"
              action="https://getform.io/f/6b98fade-4da0-4183-8e2e-8e9522def79e"
              className="flex flex-col "
            >
              <input
                type="text"
                className="bg-[#fff] p-2 rounded-md border-solid border-2"
                placeholder="Name"
                name="name"
                required
                value={nameValue}
                onChange={inputNameHandler}
              />
              <input
                type="email"
                className="my-4 p-2 bg-[#fff] rounded-md border-solid border-2"
                placeholder="Email"
                name="email"
                required
                value={emailValue}
                onChange={inputEmailHandler}
              />
              <textarea
                className="bg-[#fff] p-2 rounded-md border-solid border-2"
                name="message"
                rows="6"
                placeholder="Message"
                required
                value={messageValue}
                onChange={inputMessageHandler}
              ></textarea>
              <button className="text-black my-4 rounded-md px-[12px] py-[6px] bg-[#00d9d2] self-start md:max-w-[30%]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
