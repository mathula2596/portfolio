"use client";
import React, { useContext } from 'react'
import { context } from '@/contexts/context'

export const Sidebar = () => {
  const { navChange, nav, menus } = useContext(context);

  const socialLinks = [
    { id: 1, name: "linkedin", link: "https://www.linkedin.com/in/mathula/", icon: "icon-linkedin-1" },
    { id: 2, name: "github", link: "https://github.com/mathula2596", icon: "icon-github-1" },
    { id: 3, name: "facebook", link: "https://www.facebook.com/mathula25/", icon: "icon-facebook-1" },
  ];

  return (
    <div className="elisc_tm_sidebar w-[370px] h-[100vh] fixed left-0 top-0 border-solid border-[rgba(85,82,124,.1)] border-r">
      <div className="sidebar_inner w-full float-left h-auto clear-both text-center">
        <div className="author w-full float-left pt-[60px]">
          <div className="image relative w-[118px] inline-block">
            <img
              className="relative opacity-0 min-w-full"
              src="assets/img/thumbs/1-1.jpg"
              alt="image"
            />
            <div
              className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
              data-img-url="assets/img/profile/mathula.jpeg"
            />
          </div>
          <div className="name w-full float-left mt-[-19px]">
            <h3>
              <span>
                Mathula Shanmugaratnam<span className="back">Mathula Shanmugaratnam</span>
              </span>
            </h3>
          </div>
        </div>
        <div className="menu scrollable w-full float-left">
          <ul className="transition_link h-full flex items-center justify-center flex-col">
            {menus.map((menu, i) => (
              <li
                className={`mb-[15px] ${nav === menu.href ? "active" : ""}`}
                key={menu.id}
              >
                <a href={`#${menu.href}`} onClick={() => navChange(menu.href)}>
                  {menu.name}
                </a>
              </li>
            ))}
            <li>
            <div className='elisc_tm_button '>

            <a href='assets/files/MathulaShanmugaratnamCV.docx' download={'MathulaShanmugaratnamCV.docx'} className="text-white menu-download" >Download CV</a>
            </div>
            </li>
          </ul>
        </div>
        <div className="copyright absolute bottom-[50px]">
          <div className="social w-full float-left mb-[7px]">
            <ul>
              {socialLinks.map((link) => (
                <li className="mr-[3px] inline-block" key={link.id}>
                  <a
                    className="w-[40px] h-[40px] inline-block relative rounded-full text-dark-color"
                    href={link.link}
                  >
                    <i
                      className={`${link.icon} absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[16px]`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text py-0 px-[50px]">
            <p>
              Copyright © {new Date().getFullYear()} Mathula. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
