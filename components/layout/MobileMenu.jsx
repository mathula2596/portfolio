"use client";
import React, { useContext, useEffect, useState } from 'react'
import { context } from '@/contexts/context'
import { eliscUtilits } from '@/utils/util';

export const MobileMenu = () => {
    const { navChange, nav, menus } = useContext(context);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
      eliscUtilits.smoothScrolling();
    }, []);
    return (
      <>
        <div className="elisc_tm_topbar fixed top-0 left-0 right-0 h-[50px] bg-white z-[15] hidden">
        <div className="topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]">
          <div className="logo flex items-center" data-type="image">
            {/* Logo Image */}
            <a className="image mt-0" href="#">
              <img
                className="max-w-[50px] max-h-[40px] w-[40px] h-[40px] rounded-full"
                src="assets/img/profile/mathula.jpeg"
                alt="logo"
              />
            </a>
            {/* Logo Text */}
            <span className="font-bold ml-2">Mathula Shanmugaratnam</span>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>

        </div>
        <div className={`elisc_tm_mobile_menu ${toggle ? "opened" : ""}`}>
          <div className="inner relative w-full h-full text-right px-[20px] pt-[70px] pb-[20px]">
            <div className="wrapper">
              <div className="avatar w-[100px] h-[100px] relative float-right mb-[50px]">
                <div
                  className="image absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                  data-img-url="assets/img/profile/mathula.jpeg"
                />
              </div>
              <div className="menu_list w-full h-auto clear-both float-left mb-[50px]">
                <ul className="transition_link m-0">
                  {menus.map((menu, i) => (
                    <li
                      className={`mb-[7px] ${nav === menu.href ? "active" : ""}`}
                      key={menu.id}
                    >
                      <a
                        href={`#${menu.href}`}
                        onClick={() => navChange(menu.href)}
                      >
                        {menu.name}
                      </a>
                    </li>
                  ))}
                  <li>
                    <div className='elisc_tm_button'>

                      <a href='assets/files/MathulaShanmugaratnamCV.docx' download={'MathulaShanmugaratnamCV.docx'} className="">Download CV</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="social w-full float-left mb-[5px]">
                <ul>
                 
                  <li className="mr-[8px] inline-block">
                    <a className="text-[#333]" href="https://www.linkedin.com/in/mathula/">
                      <img
                        className="svg"
                        src="assets/img/svg/social/linkedin.svg"
                        alt="image"
                      />
                    </a>
                  </li>
                  <li className="mr-[8px] inline-block">
                    <a className="text-[#333]" href="https://github.com/mathula2596?tab=repositories">
                      <img
                        className="svg"
                        src="assets/img/svg/social/github.svg"
                        alt="image"
                      />
                    </a>
                  </li>
                  <li className="mr-[8px] inline-block">
                    <a className="text-[#333]" href="https://www.facebook.com/mathula25/">
                      <img
                        className="svg"
                        src="assets/img/svg/social/facebook.svg"
                        alt="image"
                      />
                    </a>
                  </li>
                  <li className="mr-[8px] inline-block">
                    <a className="text-[#333]" href="https://www.instagram.com/mathula_shanmugaratnam/">
                      <img
                        className="svg"
                        src="assets/img/svg/social/instagram.svg"
                        alt="image"
                      />
                    </a>
                  </li>
                 
                 
                </ul>
              </div>
              <div className="copyright w-full float-left">
                <p className="text-dark-color">
                  Copyright © {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
