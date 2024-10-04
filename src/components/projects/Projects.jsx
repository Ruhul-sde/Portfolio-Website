import React from 'react';
import Title from '../layouts/Title';
import projectOne from '../../assets/images/projectOne.png';
import projectTwo from '../../assets/images/projectTwo.png';
import projectThree from '../../assets/images/projectThree.png';
import projectFour from '../../assets/images/projectFour.png';
import projectFive from '../../assets/images/projectFive.png';
import projectSix from '../../assets/images/projectSix.png';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Smart-Home-Automation-System"
          des="Designed and implemented a smart home automation system that allows users to remotely control and monitor home appliances through a mobile application, optimizing energy use and providing enhanced security."
          src={projectOne}
          githubLink="https://github.com/Ruhul-sde/Smart-Home-Automation-System.git"
          // websiteLink="https://your-website-link.com/smart-home-automation"
        />
        <ProjectsCard
          title="E-Commerce-with-AI-Powered-Recommendations"
          des="Developed an e-commerce platform with AI-powered recommendation algorithms, handling 1000+ daily users and achieving a 15% boost in sales conversion rates."
          src={projectTwo}
          githubLink="https://github.com/Ruhul-sde/E-Commerce-with-AI-Powered-Recommendations.git"
          // websiteLink="https://your-website-link.com/ecommerce-ai-recommendations"
        />
        <ProjectsCard
          title="Fraud-Detection-in-Financial-Transactions"
          des="Implemented a fraud detection system for financial transactions, analyzing 500,000+ transactions daily with 95% accuracy."
          src={projectThree}
          githubLink="https://github.com/Ruhul-sde/Fraud-Detection-in-Financial-Transactions.git"
          // websiteLink="https://your-website-link.com/fraud-detection"
        />
        <ProjectsCard
          title="Portfolio-Website"
          des="Created a dynamic and responsive portfolio website showcasing 10+ projects, skills, and achievements."
          src={projectFour}
          githubLink="https://github.com/Ruhul-sde/Portfolio-Website.git"
          // websiteLink="https://your-website-link.com/portfolio"
        />
        <ProjectsCard
          title="Collaborative-Code-Editor"
          des="Developed a real-time collaborative code editor that enables multiple users to write, edit, and debug code simultaneously."
          src={projectFive}
          githubLink="https://github.com/Ruhul-sde/Collaborative-Code-Editor.git"
          // websiteLink="https://your-website-link.com/collaborative-code-editor"
        />
        <ProjectsCard
          title="Deep-Fake-Detection"
          des="Developed a system capable of detecting deep fakes or manipulated media with an accuracy of 92%."
          src={projectSix}
          githubLink="https://github.com/Ruhul-sde/Deep-Fake-Detection.git"
          // websiteLink="https://your-website-link.com/deep-fake-detection"
        />
      </div>
    </section>
  );
};

export default Projects;
