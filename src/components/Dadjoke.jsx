import React, { useState } from "react";

const Dadjoke = () => {
  const [joke, setJoke] = useState(
    "Click the button below if you want to have a good laugh :)"
  );
  const [buttonText, setButtonText] = useState("Make Me Laugh!");

  async function getJoke() {
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const jokeObj = await jokeData.json();
    setJoke(jokeObj.joke);
    setButtonText("I Want More!");
    console.log(jokeData);
  }

  return (
    <section className="my-[120px] w-full h-auto flex items-center justify-center flex-col">
      <div className="joke-wrapper w-[100%]">
        <h3 className="text-black text-2xl font-bold text-center">
          Hey, thanks!
        </h3>
        <p className="text-center w-[85%] md:w-[50%] mx-auto text-sm md:text-base ">
          I greatly appreciate you for taking the time to visit my portfolio
          website. I hope you enjoyed browsing through my sample projects. To
          show my appreciation, please allow me to try to put a smile on your
          face before you leave!
        </p>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="punchline--container h-[100px] px-[12px] w-[85%] md:w-[60%] flex items-center justify-center bg-[#f7f7f7] my-[20px] rounded-md shadow-md">
            <h3 className="max-w-[700px] italic md:text-xl">{joke}</h3>
          </div>
          <button
            className="py-[6px] px-[12px] text-xs md:text-lg flex gap-[6px] items-center cursor-pointer font-regular bg-[#00d9db] text-black rounded-md hover:bg-[#00b8bb] duration-300"
            onClick={getJoke}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dadjoke;
