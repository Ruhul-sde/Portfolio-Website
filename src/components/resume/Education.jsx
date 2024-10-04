import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B Tech in Computer Science"
            subTitle="Cooch Behar Government engineering College (2020 - 202024)"
            result="8.56/10"
            des="Graduated with a B.Tech in CSE from CGEC, specializing in AI and Python, with hands-on experience in software development and full-stack web projects."
          />
          <ResumeCard
            title="B.SC In Computer Science"
            subTitle="Cooch Behar Government engineering College (2020 - 2024)"
            result="8.56/10"
            des="Completed a B.Sc. in Computer Science alongside my B.Tech at CGEC, earning the degree through MOOCs provided by MAKAUT, which enriched my knowledge in core computing concepts and advanced technologies."
          />
          <ResumeCard
            title="Madhyamik(10th)"
            subTitle="Mitna High School (2014 - 2016)"
            result="76.7/100"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Advanced Java Intern"
            subTitle="CGEC (Under Prof Sukhendu Sakher Mandal)- (2022)"
            result="CGEC"
            des="Developed a comprehensive Airline Reservation System using Java and Spring Boot, with secure user authentication and payment processing, enhancing booking efficiency and user experience.."
          />
          {/* <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy." */}
          {/* /> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Education