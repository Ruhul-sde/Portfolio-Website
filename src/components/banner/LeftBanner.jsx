import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full-Stack Software Developerr.", "Java & Python Programmer.","AI Enthusiast."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ruhul Amin</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a passionate Full-Stack Developer with a B.Tech in Computer Science and Engineering from Cooch Behar Government Engineering College, 2024. Specializing in MERN, Java, AI, and Python, I thrive on leveraging cutting-edge technologies to build innovative, user-friendly solutions. My work spans from AI-driven applications to seamless web experiences, all aimed at solving real-world challenges. Explore my projects to see how I turn ideas into impactful solutions, and feel free to connect with me for collaboration or conversation!
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner