import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import { contactImg } from "../../assets/index";
import contactImg from '../../assets/images/contactImg.png'

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src= {contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ruhul Amin</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        As a 2024 Computer Science graduate, I specialize in full-stack development with expertise in Java, Python, and the MERN stack, alongside proficiency in React. I am passionate about leveraging technology to solve real-world challenges and advocate for diversity and inclusion in the tech industry.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7407567121</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">ruhul.amin.sde@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft