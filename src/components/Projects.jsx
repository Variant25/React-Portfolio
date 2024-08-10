import React from 'react'
import image1 from '../assets/images/project-1.jpg'



function Projects() {
  return (
    <div>
         <section class="projects section" id="projects">
         <h2 class="section__title-1"><span>Projects</span></h2>
         <div class="projects__container container grid">
         <a href="https://blog-web-application-ayush-pandeys-projects-abbef0b5.vercel.app/" target="_blank" class="projects__link">
            <article class="projects__card">
               <div class="projects__image">
                  <img src={image1} alt="image" class="projects__img"/>
                  <a href="#" class="projects__button button"><i class="ri-arrow-right-up-line"></i></a>
               </div>
               <div class="projects__content">
                  <h3 class="projects__subtitle">Website</h3>
                  <h2 class="projects__title">Blogging Website</h2>
                  <p class="projects__description">Configured the backend using Node.js and Express, establishing a connection to MongoDB
                     using Mongoose for data storage and retrieval.
                     Designed and implemented the database schema for blogs and users, ensuring efficient
                     data management and access.
                     Developed dynamic frontend interfaces using EJS templates, enabling interactive
                     content display and form handling.</p>
               </div>
              
            </article>
            </a>
            <a href="https://kif.foundation" target="_blank" class="projects__link">
            <article class="projects__card">
               <div class="projects__image">
                  <img src={image1} alt="image" class="projects__img"/>
                  <a href="#" class="projects__button button"><i class="ri-arrow-right-up-line"></i></a>
               </div>
               <div class="projects__content">
                  <h3 class="projects__subtitle">Website</h3>
                  <h2 class="projects__title">
                  Kif.foundation</h2>
                  <p class="projects__description">As the web developer, I was instrumental in creating a dynamic and engaging online presence for this premier hub for entrepreneurial transformation and global well-being. My role involved designing and developing a website that reflects the foundation's mission to foster innovation, collaboration, and sustainable business practices.</p>
               </div>
              
            </article>
            </a>

            <a href="https://ai-interview-mocker-nine-pink.vercel.app/" target="_blank" class="projects__link">
                <article class="projects__card">
               <div class="projects__image">
                  <img src={image1} alt="image" class="projects__img"/>
                  <a href="#" class="projects__button button"><i class="ri-arrow-right-up-line"></i></a>
               </div>
               <div class="projects__content">
                  <h3 class="projects__subtitle">Website</h3>
                  <h2 class="projects__title">Mock Interview Platform</h2>
                  <p class="projects__description">Developed a comprehensive mock interview platform using Next.js, Clerk, and the Gemini API. 
                     The platform allows users to create customized mock interviews, read preparation instructions, 
                     and conduct interviews in a simulated environment. Post-interview, users receive detailed feedback and ratings
                      with comparisons to expected answers to help improve their performance. 
                      .</p>
               </div>
              
            </article>
            </a>
          
         </div>
      </section>
    </div>
  )
}

export default Projects