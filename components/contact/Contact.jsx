"use client";
import React, { useState } from 'react'
import { SectionContainer } from '../SectionContainer';

export const Contact = () => {
    const [mailData, setMailData] = useState({
        name: "",
        email: "",
        message: "",
      });
      const { name, email, message } = mailData;
      const [error, setError] = useState(null);
      const [success, setSuccess] = useState(null);
      const onChange = (e) =>
        setMailData({ ...mailData, [e.target.name]: e.target.value });
      
      const onSubmit = async (e) => {
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || message.length === 0) {
          setError(true);
          setSuccess(false);
          clearError();
        } else {

          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
          });

          if (res.ok) {
            const result = await res.json();  // Parse the JSON body
            console.log('Parsed Result:', result);  // Log parsed result

            setSuccess(result.message); 
            setMailData({ name: '', email: '', message: '' }); 

          } else {
            // Handle errors when response isn't OK
            setSuccess(null)
            const errorData = await res.json();
            console.log('Error Data:', errorData);
            setError(errorData.message || 'Something went wrong. Please try again.');
          }
        }
      };
      const clearError = () => {
        setTimeout(() => {
          setError(null);
          setSuccess(null);
        }, 2000);
      };
      return (
        <SectionContainer name="contact">
          <div className="elisc_tm_contact w-full min-h-[100vh] float-left bg-[#E9F9FF] pt-[120px]">
            <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
              <div className="wrapper w-full float-left flex">
                <div className="left w-1/2 pr-[50px]">
                  <div className="elisc_tm_title w-full float-left">
                    <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                      - Let's Connect
                    </span>
                    <h3 className="text-[40px] font-extrabold">Get in touch</h3>
                  </div>
                  <div className="text w-full float-left mt-[20px] mb-[40px]">
                  <p>
                    I’m currently looking for new opportunities and exciting projects. I am open to relocation and ready to work anywhere to contribute to your next venture. 
                    If you have something in mind or need assistance, feel free to reach out. I'm available anytime to discuss how I can be a valuable asset to your team.
                  </p>


                  </div>
                  <div className="info w-full float-left">
                    <ul>
                      <li className="mb-[8px] w-full float-left">
                        <a
                          className="text-dark-color font-semibold font-inter inline-block relative"
                          href="tel:+447902416367"
                        >
                          +44 7902416367
                        </a>
                      </li>
                      <li className="mb-[8px] w-full float-left">
                        <a
                          className="text-dark-color font-semibold font-inter inline-block relative"
                          href="mailto:mathula2504@gmail.com"
                        >
                          mathula2504@gmail.com
                        </a>
                      </li>
                      <li className="w-full float-left">
                        <a
                          className="href_location text-dark-color font-semibold font-inter inline-block relative"
                          href="#"
                        >
                          Twyford Road, Harrow, UK
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="right w-1/2 pl-[50px]">
                  <div className="fields w-full float-left h-auto clear-both">
                    
                    <form
                      onSubmit={(e) => onSubmit(e)}
                      className="contact_form"
                      id="contact_form"
                    >
                      <div
                        className="returnmessage"
                        data-success="Your message has been received, We will contact you soon."
                      />
                      <div
                        className={error ? "empty_notice" : "returnmessage"}
                        style={{ display: error == null ? "none" : "block" }}
                      >
                        <span>
                          {error
                            ? "Please Fill Required Fields"
                            : "Your message has been received, We will contact you soon."}
                            
                        </span>
                       
                      </div>
                      <div
                        className={success ? "returnmessage" : "empty_notice"}
                        style={{ display: success == null ? "none" : "block" }}
                      >
                        <span className='text-green-500 font-bold'>
                          {success}
                        </span>
                        
                      </div>
                      <div className="first w-full float-left">
                        <ul>
                          <li className="w-full mb-[25px] float-left">
                            <input
                              id="name"
                              type="text"
                              placeholder="Enter your name"
                              autoComplete="off"
                              name="name"
                              onChange={(e) => onChange(e)}
                              value={name}
                            />
                          </li>
                          <li className="w-full mb-[25px] float-left">
                            <input
                              id="email"
                              type="text"
                              placeholder="Your email"
                              autoComplete="off"
                              name="email"
                              onChange={(e) => onChange(e)}
                              value={email}
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="last">
                        <textarea
                          id="message"
                          placeholder="Write something..."
                          name="message"
                          onChange={(e) => onChange(e)}
                          value={message}
                        />
                      </div>
                      <div className="elisc_tm_button">
                        <input type="submit" value="Submit now" />
                      </div>
                      
                    </form>
                  </div>
                </div>
              </div>
              <div className="elisc_tm_map w-full float-left mt-[100px] mb-[120px]">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      width="100%"
                      height={375}
                      id="gmap_canvas"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.624441231524!2d-0.36505622357601786!3d51.57511800575429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876133923225449%3A0x52d1768a6bc1f0e2!2sTwyford%20Rd%2C%20Harrow!5e0!3m2!1sen!2suk!4v1736696397122!5m2!1sen!2suk"
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                    />
                    
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </SectionContainer>
      );
}
