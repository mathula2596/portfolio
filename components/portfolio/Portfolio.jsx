"use client";
import React, { useContext } from 'react'
import { SectionContainer } from '../SectionContainer';
import { context } from '@/contexts/context';
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from './sliderProps';
import { Client } from './Client';
import { Testimonal } from './Testimonal';

const projects = [
  {
    id:1,
    title: "Library Management System",
    category: "Desktop Application",
    image: "assets/img/portfolio/1.jpg",
    link: "https://github.com/mathula2596/LibraryManagementSystem"
  },
  {
    id:2,
    title: "Defect Management System",
    category: "Web Application",
    image: "assets/img/portfolio/1.jpg",
    link: "https://github.com/mathula2596/DefectManagementSystem/tree/master/FinalDefect"
  },
  {
    id:3,
    title: "I For You",
    category: "Mobile Application",
    image: "assets/img/portfolio/1.jpg",
    link: "https://github.com/mathula2596/IForYou"
  },
  {
    id:4,
    title: "Fitting In",
    category: "Unity Game Application",
    image: "assets/img/portfolio/1.jpg",
    link: "https://github.com/mathula2596/FittingIn"
  },
  {
    id:5,
    title: "News Portal",
    category: "Web Application",
    image: "assets/img/portfolio/1.jpg",
    link: "https://bitbucket.org/bitproject2019/techfascino/src/master/"
  },

];

export const Portfolio = () => {
    const { navChange } = useContext(context);
    return (
    <SectionContainer name="portfolio">
      <div className="elisc_tm_portfolio w-full float-left pt-[120px]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="elisc_tm_portfolio_title w-full float-left flex items-end justify-between">
            <div className="elisc_tm_title w-auto float-left">
              <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                - Projects
              </span>
              <h3 className="text-[40px] font-extrabold">
                Recent completed works
              </h3>
            </div>
            <div className="buttons">
              <a className="prev_button" href="#">
                <img
                  className="svg"
                  src="assets/img/svg/prev.svg"
                  alt="image"
                />
              </a>
              <a className="next_button" href="#">
                <img
                  className="svg"
                  src="assets/img/svg/next.svg"
                  alt="image"
                />
              </a>
            </div>
          </div>
          <div className="portfolio_list w-full float-left mt-[40px] mb-[120px]">
            <Swiper
              {...sliderProps.portfolio}
              className="gallery_zoom mb-[65px]"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="list_inner">
                    <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                      <img
                        className="min-w-full relative opacity-0"
                        src={project.image}
                        alt={project.title}
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url={project.image}
                      />
                      <a target='_blank' 
                        className="elisc_tm_full_link popup-youtube absolute inset-0 z-[5]"
                        href={project.link}
                      />
                    </div>
                    <div className="details w-full float-left">
                      <span className="category inline-block mb-[7px]">
                        <a
                          className="inline-block uppercase text-[#55527C] font-medium"
                          onClick={() => navChange("skill")}
                        >
                          {project.category}
                        </a>
                      </span>
                      <h3 className="title">
                        <a
                          className="line_effect popup-youtube font-semibold text-[24px] text-[#130F49]"
                          href={project.link} target='_blank'
                        >
                          {project.title}
                        </a>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
             
            </Swiper>
            <div className="elisc_tm_button" data-position="center">
              <a href="https://github.com/mathula2596?tab=repositories" target='_blank'>View all projects</a>
            </div>
          </div>
        </div>
      </div>
     
    </SectionContainer>
    );
}
