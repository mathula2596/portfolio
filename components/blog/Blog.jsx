import React, { useContext } from 'react'
import { SectionContainer } from '../SectionContainer';
import { context } from '@/contexts/context';

const blogsData = [
    {
      id: 1,
      title: "The Journey of a Full-Stack Developer",
      date: "January 10, 2025",
      img: "assets/img/blog/blog1.jpeg",
      content: "<h3>Introduction</h3>\
                  <p>Becoming a full-stack developer involves understanding both the frontend and backend of a web application. As a full-stack developer, I am responsible for everything from building the user interface to ensuring smooth server-side operations. In this blog post, I’ll take you through the tools, technologies, and best practices that help me develop powerful web applications efficiently.</p>\
                  <h3>Frontend Development</h3>\
                  <p>The frontend of a web application is all about creating a great user experience. For building responsive and dynamic web interfaces, I rely on React.js and Next.js. These JavaScript libraries and frameworks allow me to build reusable components and manage application state effectively. I also use Tailwind CSS for styling, which enables me to build custom designs quickly using utility-first classes.</p>\
                  <p>Some best practices for frontend development include:</p>\
                  <ul>\
                    <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>Component-based architecture: Building modular and reusable components</li>\
                    <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>State management: Using tools like Redux or React Context for managing global state</li>\
                    <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>Performance optimization: Code-splitting, lazy loading, and image optimization</li>\
                  </ul>\
                  <h3>Backend Development</h3>\
                  <p>On the backend, I often use Node.js with Express.js for building scalable and fast server-side applications. Laravel is another PHP framework I use for developing robust backend systems. Both of these technologies enable me to create APIs, manage databases, and authenticate users effectively.</p>\
                  <p>Some best practices for backend development include:</p>\
                  <ul>\
                    <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>API development: Following RESTful principles and using proper HTTP status codes</li>\
                    <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>Authentication & Authorization: Implementing OAuth and JWT for secure user authentication</li>\
                    <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>Database design: Designing normalized databases and ensuring efficient queries</li>\
                  </ul>\
                  <h3>The Full-Stack Integration</h3>\
                  <p>Being proficient in both frontend and backend development enables me to seamlessly integrate the two parts of an application. For instance, when building an ERP system, I ensure that the frontend components interact with the backend via APIs. Both layers need to work together efficiently to create a smooth user experience.</p>"
    },
    {
      id: 2,
      title: "Building Efficient and Scalable Databases: Best Practices for Developers",
      date: "January 01, 2025",
      img: "assets/img/blog/blog2.jpeg",
      content: "<h3>Introduction</h3>\
              <p>Databases are the backbone of most web applications. A well-structured database can make the difference between a slow, cumbersome app and a fast, reliable one. In this blog post, I will share my experience in designing efficient and scalable databases using technologies like MySQL, PostgreSQL, and MongoDB.</p>\
              <h3>Choosing the Right Database</h3>\
              <p>The choice of database depends on the project’s needs. If the application requires complex queries, PostgreSQL is a great choice due to its strong support for relational data and advanced features like indexing. On the other hand, MongoDB is a great choice for unstructured data or applications that need flexibility in schema design.</p>\
              <h3>Database Normalization and Design</h3>\
              <p>Normalization is crucial for reducing data redundancy and ensuring that the data is logically organized. However, sometimes denormalization is necessary for performance optimization, especially when dealing with high traffic and complex joins.</p>\
              <p>Best practices include:</p>\
              <ul>\
                <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>Normalizing data: Reducing redundancy by organizing data into related tables</li>\
                <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>Indexing: Creating indexes on frequently queried fields to speed up searches</li>\
                <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>Optimizing queries: Using EXPLAIN in SQL to analyze query performance</li>\
              </ul>\
              <h3>Scalability Considerations</h3>\
              <p>When building large-scale applications, databases need to be scalable. One way to achieve this is through horizontal scaling, where the database is split into multiple instances or clusters. Another technique is sharding, where data is distributed across different servers based on a specific key (e.g., user ID).</p>"

    },
    {
      id: 3,
      title: "A Beginner’s Guide to Cloud Computing and Server Hosting",
      date: "January 12, 2025",
      img: "assets/img/blog/blog3.jpeg",
      content: "<h3>Introduction</h3>\
              <p>Cloud computing has revolutionized the way we develop and deploy applications. Gone are the days when we needed to maintain physical servers. With the cloud, we can easily host and scale applications. In this blog post, I’ll explain what cloud computing is, how to get started with server hosting, and the benefits of using cloud services like AWS and VPS.</p>\
              <h3>What is Cloud Computing?</h3>\
              <p>Cloud computing refers to the delivery of computing services such as storage, databases, and servers over the internet. The cloud allows businesses to access computing resources on-demand, without having to invest in expensive hardware or worry about maintenance.</p>\
              <h3>Setting Up a Server</h3>\
              <p>When deploying a web application, one of the first steps is setting up a server. I typically use cloud services like AWS EC2 for setting up scalable virtual machines. Another option is using VPS (Virtual Private Server), which gives you more control over the server environment.</p>\
              <p>Steps for setting up a server:</p>\
              <ul>\
                <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>Choose a cloud provider (AWS, Google Cloud, DigitalOcean, etc.)</li>\
                <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>Launch a virtual machine with the desired specifications (CPU, RAM, Storage)</li>\
                <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>Install necessary software (Nginx, Node.js, PHP, etc.)</li>\
                <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>Set up security (firewalls, SSL certificates, etc.)</li>\
              </ul>\
              <h3>Managing and Configuring Nginx</h3>\
              <p>Nginx is a powerful web server that also acts as a reverse proxy. It's commonly used to serve static files and handle HTTP requests in production environments. Proper configuration of Nginx can ensure that your application runs smoothly and securely.</p>"

    },
    {
      id: 4,
      title: "My Approach to Building and Launching a Web Application",
      date: "January 15, 2025",
      img: "assets/img/blog/blog4.jpeg",
      content: "<h3>Introduction</h3>\
                  <p>Building a web application is a multi-step process that requires careful planning, development, and deployment. In this post, I will walk you through my approach for building and launching a web application, from ideation to deployment and maintenance.</p>\
                  <h3>Step 1: Ideation and Requirements Gathering</h3>\
                  <p>The first step in building any web application is understanding the project’s goals. I begin by gathering requirements from stakeholders, defining features, and setting project timelines. Tools like Trello or Notion are great for tracking project milestones and tasks.</p>\
                  <h3>Step 2: Design and Prototyping</h3>\
                  <p>Once the project requirements are clear, I move to the design phase. I use Figma to create wireframes and prototypes. This gives both the client and the development team a clear visual of the application’s UI/UX before development begins.</p>\
                  <h3>Step 3: Development and Testing</h3>\
                  <p>With the design in place, I begin the development phase. I focus on building the backend (APIs, databases) and frontend (UI components) simultaneously. Throughout the development process, I write unit and integration tests to ensure the application works as expected.</p>\
                  <h3>Step 4: Deployment and Monitoring</h3>\
                  <p>Once the application is complete, I deploy it to the cloud using AWS or VPS hosting. I configure continuous integration and continuous deployment (CI/CD) pipelines to automate the process. After deployment, I monitor the application using tools like New Relic or Datadog to ensure it performs well in production.</p>\
                  <h3>Step 5: Maintenance and Updates</h3>\
                  <p>Once the application is live, my work isn’t over. Regular updates and bug fixes are essential to keep the app running smoothly. I continue to gather feedback from users, perform maintenance, and roll out new features.</p>"
    },
    {
      id: 5,
      title: "Understanding API Development",
      date: "January 06, 2025",
      img: "assets/img/blog/blog5.jpeg",
      content: "<h3>Introduction</h3>\
                  <p>APIs (Application Programming Interfaces) are the backbone of modern web applications. They allow different services to communicate with each other, exchanging data and triggering actions. In this blog post, I will walk you through the process of developing APIs, along with the best practices and tools that help ensure they are secure, scalable, and easy to use.</p>\
                  <h3>What is an API?</h3>\
                  <p>An API is a set of protocols and tools that allow different software systems to communicate with each other. APIs can be used for everything from retrieving data from a database to integrating with third-party services like payment gateways or social media platforms.</p>\
                  <h3>Designing a RESTful API</h3>\
                  <p>One of the most popular approaches for building APIs is REST (Representational State Transfer). RESTful APIs are designed around the idea of resources, which are objects or data that can be accessed using HTTP methods such as GET, POST, PUT, DELETE.</p>\
                  <h3>Best Practices for RESTful API Design:</h3>\
                  <ul>\
                    <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>Use clear and consistent endpoint names</li>\
                    <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>Utilize appropriate HTTP status codes</li>\
                    <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>Follow the principles of stateless communication</li>\
                    <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span>Ensure that your API is well-documented</li>\
                  </ul>\
                  <h3>Authentication and Authorization</h3>\
                  <p>Security is crucial when it comes to APIs, especially when handling sensitive user data. Two commonly used methods for API authentication are OAuth and JWT (JSON Web Tokens). OAuth is great for delegating access to third-party services, while JWT allows you to securely transmit information between parties as a JSON object.</p>\
                  <h3>Tools for API Development</h3>\
                  <p>There are various tools that can help you build and manage APIs effectively. Some of my favorites include:</p>\
                  <ul>\
                    <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span><strong>Postman:</strong> A powerful tool for testing and documenting APIs.</li>\
                    <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span><strong>Swagger:</strong> A tool that helps you design and document REST APIs.</li>\
                    <li><span className='font-bold text-gray-500 mr-2 text-4xl'>.</span><strong>Node.js & Express.js:</strong> A lightweight JavaScript framework for building APIs quickly.</li>\
                  </ul>\
                  <h3>API Rate Limiting</h3>\
                  <p>To protect your API from abuse and ensure fair usage, it's essential to implement rate limiting. This limits the number of requests a user can make to your API within a specific time period. Tools like Redis can be used to track request counts and enforce rate limits.</p>\
                  <h3>Conclusion</h3>\
                  <p>API development is a fundamental skill for web developers, and following best practices ensures that your APIs are secure, efficient, and user-friendly. Whether you are building public APIs for external developers or private APIs for internal use, designing with scalability and security in mind is key to long-term success.</p>"
    }

];
export const Blog = () => {
    const { modalToggle, setBlogModal, navChange } = useContext(context);
    return (
      <SectionContainer name="blogs">
        <div className="elisc_tm_news fn_w_sminiboxes w-full float-left py-[120px] px-0">
          <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
            <div className="wrapper w-full flex justify-between">
              <div className="left fn_w_sminibox w-1/3 pr-[50px]">
                <div className="elisc_tm_sticky_section">
                  <div className="elisc_tm_title w-full float-left">
                    <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                      - Blog
                    </span>
                    <h3 className="text-[40px] font-extrabold">
                      My Latest blog 
                    </h3>
                  </div>
                  <div className="elisc_tm_button transition_link mt-[45px]">
                    <a href="#contact" onClick={() => navChange("contact")}>
                      Get in touch
                    </a>
                  </div>
                </div>
              </div>
              <div className="right fn_w_sminibox w-[66.6666%] pl-[50px]">
                <div className="elisc_tm_sticky_section">
                  <div className="list w-full float-left relative">
                    <ul>
                      {blogsData.map((blog) => (
                        <li
                          className="mb-[40px] w-full float-left"
                          data-img={blog.img}
                          key={blog.id}
                        >
                          <img
                            className="popup_image"
                            src={blog.img}
                            alt="Blog Image"
                          />
                          <div className="list_inner w-full float-left relative flex items-center justify-between">
                            <div className="info w-1/2">
                              <div className="meta w-full float-left flex items-center mb-[12px]">
                                <img
                                  className="svg w-[18px] h-[18px]"
                                  src="assets/img/svg/calendar.svg"
                                  alt="image"
                                />{" "}
                                <span className="font-medium pl-[8px]">
                                  {blog.date}
                                </span>
                              </div>
                              <div className="title w-full float-left">
                                <h3 className="text-[#130F49] text-[28px] font-semibold leading-[36px]">
                                  <a
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      modalToggle(true);
                                      setBlogModal(blog);
                                    }}
                                  >
                                    {blog.title}
                                  </a>
                                </h3>
                              </div>
                            </div>
                            <div className="elisc_tm_read_more w-auto">
                              <a
                                className="line_effect"
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  modalToggle(true);
                                  setBlogModal(blog);
                                }}
                              >
                                Learn More
                                <span className="inline-block">
                                  <img
                                    className="svg"
                                    src="assets/img/svg/rightArrow.svg"
                                    alt="image"
                                  />
                                </span>
                              </a>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    );
}
