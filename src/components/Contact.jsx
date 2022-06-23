import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full h-auto pt-[100px] pb-[100px] projects--contact--container"
    >
      <div className="contact--wrapper w-[80%] h-[100%] mx-auto">
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
              <p className="font-bold ">egcaluag@gmail.com</p>
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
            <form action="" className="flex flex-col ">
              <input
                type="text"
                className="bg-[#fff] p-2 rounded-md border-solid border-2"
                placeholder="Name"
                name="name"
              />
              <input
                type="email"
                className="my-4 p-2 bg-[#fff] rounded-md border-solid border-2"
                placeholder="Email"
                name="email"
              />
              <textarea
                className="bg-[#fff] p-2 rounded-md border-solid border-2"
                name="message"
                rows="6"
                placeholder="Message"
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
