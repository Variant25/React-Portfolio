import React from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri'; // Import the required icon
import image1 from '../assets/images/project-1.jpg';



function Projects() {
   return (
     <div>
       <section className="projects section" id="projects">
         <h2 className="section__title-1"><span>Projects</span></h2>
         <div className="projects__container container grid">
          
             <article className="projects__card">
               <div className="projects__image">
                 <img src={image1} alt="Project 1" className="projects__img" />
                 <a href="https://blog-web-application-ayush-pandeys-projects-abbef0b5.vercel.app/" className="projects__button button"  target="_blank">
                   <RiArrowRightUpLine />
                 </a>
               </div>
               <div className="projects__content">
                 <h3 className="projects__subtitle">Website</h3>
                 <h2 className="projects__title">Blogging Website</h2>
                 <p className="projects__description">
                   Configured the backend using Node.js and Express, establishing a connection to MongoDB using Mongoose for data storage and retrieval.
                   Designed and implemented the database schema for blogs and users, ensuring efficient data management and access.
                   Developed dynamic frontend interfaces using EJS templates, enabling interactive content display and form handling.
                 </p>
               </div>
             </article>
       
 
         
             <article className="projects__card">
               <div className="projects__image">
                 <img src={image1} alt="Project 2" className="projects__img"  />
                 <a href="https://kif.foundation" className="projects__button button"  target="_blank">
                   <RiArrowRightUpLine />
                 </a>
               </div>
               <div className="projects__content">
                 <h3 className="projects__subtitle">Website</h3>
                 <h2 className="projects__title">Kif.foundation</h2>
                 <p className="projects__description">
                   As the web developer, I was instrumental in creating a dynamic and engaging online presence for this premier hub for entrepreneurial transformation and global well-being. My role involved designing and developing a website that reflects the foundation's mission to foster innovation, collaboration, and sustainable business practices.
                 </p>
               </div>
             </article>
        
 
         
             <article className="projects__card">
               <div className="projects__image">
                 <img src={image1} alt="Project 3" className="projects__img" />
                 <a href="https://ai-interview-mocker-nine-pink.vercel.app/" className="projects__button button "  target="_blank">
                   <RiArrowRightUpLine />
                 </a>
               </div>
               <div className="projects__content">
                 <h3 className="projects__subtitle">Website</h3>
                 <h2 className="projects__title">Mock Interview Platform</h2>
                 <p className="projects__description">
                   Developed a comprehensive mock interview platform using Next.js, Clerk, and the Gemini API.
                   The platform allows users to create customized mock interviews, read preparation instructions,
                   and conduct interviews in a simulated environment. Post-interview, users receive detailed feedback and ratings
                   with comparisons to expected answers to help improve their performance.
                 </p>
               </div>
             </article>
         
         </div>
       </section>
     </div>
   );
 }
 
 export default Projects;
 