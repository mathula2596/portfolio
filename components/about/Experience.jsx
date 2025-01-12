"use client";
import React, { useContext } from 'react'
import { context } from '@/contexts/context'

const experiences = [
    {
      id: 1,
      image: "assets/img/experience/1.jpg",
      date: "Nov 2023 - Present",
      company: "Mieszko Food City Limited",
      designation: "Full Stack Developer",
      description: "Developed web and mobile applications to streamline business operations, including ERP systems, real-time pricing, and HR tools using Next.js, Flutter, and Laravel. Currently working on an ERP solution with React and PostgreSQL."
    },
    {
      id: 2,
      image: "assets/img/experience/2.jpg",
      date: "Sep 2022 - Sep 2023",
      company: "BRUSH Electrical Machines Ltd",
      designation: "Engineer – Student Intern ",
      description: "Analyzed and documented VBA code, improving program understanding and structure. Mapped module interrelationships and created a user manual to enhance usability and training. Improved code readability by reorganizing variables and naming conventions.",

    },
    {
      id: 3,
      image: "assets/img/experience/3.jpg",
      date: "March 2021 - Aug 2021",
      company: "Speed IT Net",
      designation: "Junior Software Developer",
      description: "Developed a Pharmacy Billing System and Studio Order Management System using PHP and Laravel, improving transaction handling and order processing. Worked closely with clients to gather requirements and provide ongoing support, ensuring satisfaction and system improvements.",

    },
    {
      id: 4,
      image: "assets/img/experience/4.jpg",
      date: "Oct 2019 - Feb 2021",
      company: "Utrop",
      designation: "Junior Developer",
      description: "Developed and maintained the Utrop digital newspaper using WordPress and PHP, optimizing content management and storage. Built a Norwegian glossary website and contributed to the Golf Score Board app. Enhanced workflow with a Work Management System using ZOHO API and PHP.",

    },
    {
      id: 5,
      image: "assets/img/experience/3.jpg",
      date: "Jun 2019 - Sep 2019",
      company: "Infosystm",
      designation: "Software Developer - Intern ",
      description: "Developed backend systems for an Event Hall Booking System and a Point of Sales system using Laravel and PHP. Created an Employee Management System in C#, improving HR processes. Collaborated with teams to deliver tailored solutions.",

    },
    {
      id: 6,
      image: "assets/img/experience/4.jpg",
      date: "Jan 2017 - Present",
      company: "Freelancer",
      designation: "Web Developer",
      description: "Experienced freelancer skilled in developing custom backend solutions and systems, including eCommerce platforms, and point of sales systems. Expertise in Next.js, Node.js, WordPress, Laravel to create scalable, user-friendly solutions. I collaborate closely with clients to deliver tailored solutions that enhance functionality, user experience, and business efficiency.",

    },
];

export const Experience = () => {
    const { modalToggle, setexperienceModal } = useContext(context);
    return (
      <div className="elisc_tm_experience w-full float-left bg-[#F3F9FF] pt-[100px] pb-[70px] px-0">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="elisc_tm_title w-full float-left">
            <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
              - Experience
            </span>
            <h3 className="text-[40px] font-extrabold">Everything about me!</h3>
          </div>
          <div className="list w-full float-left mt-[40px]">
            <ul className="ml-[-30px] flex flex-wrap">
              {experiences.map((experience) => (
                <li
                  className="mb-[40px] pl-[30px] float-left w-1/2 flex"
                  key={experience.id}
                >
                  <img
                    className="popup_image"
                    src="assets/img/experience/1.jpg"
                    alt="image"
                  />
                  <div className="list_inner w-full bg-white rounded-[4px] px-[70px] py-[45px] relative flex flex-col">
                    <div className="short w-full flex justify-between mb-[16px]">
                      <div className="job">
                        <span className="text-yellow-color font-medium inline-block mb-[4px]">
                          -{experience.date}
                        </span>
                        <h3 className="text-[20px]">{experience.designation}</h3>
                      </div>
                      <div className="place">
                        <span className="font-medium font-inter">
                          -{experience.company}
                        </span>
                      </div>
                    </div>
                    <div className="text w-full">
                      <p className="opacity-[0.7]">{experience.description}</p>
                    </div>
                  
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    );
}
