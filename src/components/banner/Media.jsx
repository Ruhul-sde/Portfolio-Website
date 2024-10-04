import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import {  SiPython, SiReact, SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";


const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="https://github.com/Ruhul-sde" target="_blank" rel="noopener noreferrer">
         <FaGithub />
         </a>
         </span>
         <span className="bannerIcon">
         <a href="https://x.com/ruhul7407" target="_blank" rel="noopener noreferrer">
         <FaTwitter />
          </a>
          </span>
          <span className="bannerIcon">
          <a href="https://linkedin.com/in/ruhul-amin-765b40200" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
          </a>
  </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <SiReact />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media