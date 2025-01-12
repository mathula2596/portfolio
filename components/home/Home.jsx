"use client";
import React, { useContext } from 'react'
import { SectionContainer } from '../SectionContainer';
import { TypeingAnimation } from '../TypeingAnimation';
import { context } from '@/contexts/context'

export const Home = () => {
    const { navChange } = useContext(context);
    return (
      <SectionContainer name="home">
        <div className="elisc_tm_home w-full min-h-[100vh] clear-both float-left bg-[#EFFBF8]">
          <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
            <div className="details w-full min-h-[100vh] flex items-center">
              <div className="left w-1/2">
                <div className="title w-full float-left mb-[21px]">
                  <h3 className="font-extrabold text-[60px] leading-[70px]">
                    Hi, I'm <span className="text-blue-color">Mathula!</span>
                  </h3>
                  <h3 className="font-extrabold text-[60px] leading-[70px]">
                    <span className="cd-headline rotate-1">
                      {" "}
                      {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                      <span className="blc">Creative </span>
                      <TypeingAnimation />
                    </span>
                  </h3>
                  <h3 className="font-extrabold text-[60px] leading-[70px]">
                    Based in UK
                  </h3>
                </div>
                <div className="subtitle wfll max-w-[80%] float-left mb-[40px]">
                  <p>
                    I'm a UK based web developer &amp; software developer
                    with <span className="text-blue-color">4+ years</span> of
                    experience
                  </p>
                </div>
                <div className="buttons w-full float-left flex items-center mb-[150px]">
                  <div className="elisc_tm_button transition_link">
                    <a href="/assets/files/MathulaShanmugaratnamCV.docx" download={'MathulaShanmugaratnamCV.docx'}>
                      Download CV
                    </a>
                  </div>
                  <div
                    className="elisc_tm_button transition_link"
                    data-style="border"
                  >
                    <a href="#contact" onClick={() => navChange("contact")}>
                      Let's talk
                    </a>
                  </div>
                </div>
                <div className="info w-full float-left">
                  <ul className="relative">
                    <li className="pl-[15px]">
                      <a
                        className="text-[#130F49] font-semibold text-[18px]"
                        href="tel:+447902416367"
                      >
                        +44 7902416361
                      </a>
                    </li>
                    <li className="pl-[15px]">
                      <a
                        className="text-[#130F49] font-semibold text-[18px]"
                        href="mailto:mathula2504@gmail.com"
                      >
                        mathula2504@gmail.com
                      </a>
                    </li>
                    <li className="pl-[15px]">
                      <a
                        className="href_location text-[#130F49] font-semibold text-[18px]"
                        href="#"
                      >
                        Twyford Road, Harrow, UK
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right w-1/2 pl-[50px]">
                <img src="assets/img/profile/new-slider.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    );
}
