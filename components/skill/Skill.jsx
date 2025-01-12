"use client";
import React, { useContext } from 'react'
import { SectionContainer } from '../SectionContainer';
import { context } from '@/contexts/context';

const skills = [
    {
      id: 1,
      name: "Backend Development",
      image: "assets/img/service/1.jpg",
      description: "Node.js, Express.js, JavaScript, Typescript, Laravel, PHP, Python, Fast API"
    },
    {
      id: 2,
      name: "Frontend Developement",
      image: "assets/img/service/2.jpg",
      description: "React.js, Next.js, HTML, CSS, Tailwind CSS, Bootstrap"
    },
    {
      id: 3,
      name: "Desktop Application Development",
      image: "assets/img/service/3.jpg",
      description: "C#, WPF, WinForms"
    },
    {
      id: 4,
      name: "Mobile Application Developement",
      image: "assets/img/service/3.jpg",
      description: "Android, Flutter"
    },
    {
      id: 5,
      name: "Database Developement",
      image: "assets/img/service/3.jpg",
      description: "MySQL, SQL, PostgreSQL, MongoDB, Firebase, SQLite"
    },
    {
      id: 6,
      name: "CMS Development",
      image: "assets/img/service/4.jpg",
      description: "WordPress, Joomla"
    },
    {
      id: 7,
      name: "UI/UX Design",
      image: "assets/img/service/1.jpg",
      description: "Figma"
    },
    {
      id: 8,
      name: "Cloud Computing & Server Hosting",
      image: "assets/img/service/2.jpg",
      description: "AWS, Nginx, VPS, Shared Hosting, Domain and DNS Management"
    },
    {
      id: 9,
      name: "DevOps and Containerization",
      image: "assets/img/service/3.jpg",
      description: "Docker, Jenkins, Git, GitHub"
    },
    {
      id: 10,
      name: "Automation/Scripting",
      image: "assets/img/service/4.jpg",
      description: "VBA, Excel"
    },
    {
      id: 11,
      name: "Version Control",
      image: "assets/img/service/1.jpg",
      description: "GitHub, Bitbucket"
    },
    {
      id: 12,
      name: "Problem Solving",
      image: "assets/img/service/2.jpg",
      description: "Expert in identifying issues, debugging, and optimizing code for performance and efficiency."
    },
    {
      id: 13,
      name: "Project Management",
      image: "assets/img/service/1.jpg",
      description: "Skilled in planning, organizing, and overseeing projects to ensure timely delivery while meeting objectives and client needs."
    },
    {
      id: 14,
      name: "Collaboration & Communication",
      image: "assets/img/service/2.jpg",
      description: "Effective at working with cross-functional teams and communicating ideas clearly to ensure smooth project execution and client satisfaction."
    },
    {
      id: 15,
      name: "Adaptability",
      image: "assets/img/service/2.jpg",
      description: "Able to quickly adjust to new challenges, environments, and technologies, ensuring seamless transitions and effective solutions in dynamic settings."
    },

  ];

export const Skill = () => {
  const { setServiceModal, modalToggle } = useContext(context);

  return (
    <SectionContainer name="skill">
      <div className="elisc_tm_services w-full float-left pt-[110px]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="elisc_tm_service_title w-full float-left flex justify-between items-end">
            <div className="elisc_tm_title w-auto float-left">
              <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                - Skills And Abilities
              </span>
              <h3 className="text-[40px] font-extrabold">My Skills</h3>
            </div>
            <a href="mailto:mathula2504@gmail.com">mathula2504@gmail.com</a>
          </div>
          <div className="service_list w-full float-left mt-[40px] mb-[50px]">
            <ul className="ml-[-30px] flex flex-wrap">
              {skills.map((skill) => (
                <li
                  className="mb-[30px] pl-[30px] w-1/3 float-left"
                  key={skill.id}
                >
                  <img
                    className="popup_image"
                    src={skill.image}
                    alt="image"
                  />
                  <div className="list_inner w-full float-left clear-both h-full relative px-[40px] pt-[32px] pb-[55px] rounded-[4px]">
                    <div className="details w-full float-left relative z-[1]">
                      <div className="title w-full float-left mb-[13px]">
                        <span className="font-inter font-medium text-[20px] text-[rgba(19,15,73,.5)] inline-block mb-[15px]">
                          {skill.id <= 9 ? "0" + skill.id : skill.id}
                        </span>
                        <h3 className="text-[20px]">{skill.name}</h3>
                      </div>
                      <div className="text w-full float-left mb-[25px]">
                        <p className="text-[#55527C] opacity-[0.7]">
                          {skill.description}
                         
                        </p>
                      </div>
                     
                    </div>
                 
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </SectionContainer>
  );
}
