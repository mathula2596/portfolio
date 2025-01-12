import React from 'react'
import { SectionContainer } from '../SectionContainer';
import { TypeingAnimation } from '../TypeingAnimation';
import { Experience } from './Experience';

export const About = () => {
    return (
        <SectionContainer name="about">
          <div className="elisc_tm_about w-full float-left pt-[130px]">
            <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
              <div className="elisc_tm_biography w-full float-left flex mb-[40px]">
                <div className="left w-[40%]">
                  <div className="title w-full float-left mb-[40px]">
                    <span className="mini block uppercase font-medium mb-[12px]">
                      - Nice to meet you!
                    </span>
                    <h3 className="name font-extrabold text-[40px]">
                      Mathula
                    </h3>
                    <span className="job font-semibold text-[20px] text-dark-color">
                      <span className="cd-headline rotate-1">
                        {" "}
                        {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                        <span className="blc">Web &amp; Software </span>
                        <TypeingAnimation />
                      </span>
                    </span>
                  </div>
                  <div className="elisc_tm_button transition_link">
                    <a href="#portfolio">Got a project?</a>
                  </div>
                </div>
                <div className="right w-[60%]">
                  <div className="text w-full float-left mb-[44px]">
                    <p className="mb-[30px]">
                      Hello there! My name is{" "}
                      <span className="text-yellow-color">Mathula Shanmugaratnam</span>. I am
                      a web and software developer &amp; designer, and I'm very passionate and
                      dedicated to my work.
                    </p>
                    <p>
                      With 4+ years experience as a professional a developer,
                      I have acquired the skills and knowledge necessary to make
                      your project a success. I enjoy every step of the development
                      process, from discussion and collaboration.
                    </p>
                  </div>
                  <div className="info w-full float-left">
                    <ul className='flex justify-around'>
                      <li className="mr-[40px] mb-[20px] inline-block">
                        <span className="block uppercase underline">Mail</span>
                        <span className="block font-inter font-bold text-dark-color">
                          <a href="mailto:mathula2504@gmail.com">mathula2504@gmail.com</a>
                        </span>
                      </li>
                      <li className="mr-[40px] mb-[20px] inline-block">
                        <span className="block uppercase underline">Phone</span>
                        <span className="block font-inter font-bold text-dark-color">
                          <a href="tel:+447902416367">+44 7902416367</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="elisc_tm_counter w-full float-left mb-[90px]">
                <ul className="ml-[-30px]">
                  <li className="mb-[30px] float-left w-1/3 pl-[30px]">
                    <div className="list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[#D3F4EC]">
                      <h3 className="text-[40px] mb-[7px]">4+</h3>
                      <span className="font-medium font-karla uppercase">
                        Years of Experience
                      </span>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left w-1/3 pl-[30px]">
                    <div className="list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[#FCE8D4]">
                      <h3 className="text-[40px] mb-[7px]">35+</h3>
                      <span className="font-medium font-karla uppercase">
                        Projects Completed
                      </span>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left w-1/3 pl-[30px]">
                    <div className="list_inner w-full float-left relative text-center py-[60px] px-[20px] rounded-[4px] overflow-hidden bg-[#E3F9E0]">
                      <h3 className="text-[40px] mb-[7px]">10+</h3>
                      <span className="font-medium font-karla uppercase">
                        Happy Clients
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <Experience />
          </div>
        </SectionContainer>
      );
}
