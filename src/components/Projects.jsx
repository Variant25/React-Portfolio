import React from 'react'
import image1 from '../assets/images/project-1.jpg'



function Projects() {
  return (
    <div>
         <section class="projects section" id="projects">
         <h2 class="section__title-1"><span>Projects</span></h2>
         <div class="projects__container container grid">
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
               <div class="projects__buttons">
                  <a href="https://github.com/Variant25/Blog-Web-Application.git" target="_blank" class="projects__link"><i class="ri-github-fill"></i></a>
                  <a href="https://dribbble.com/yourusername/project1" target="_blank" class="projects__link"><i class="ri-dribbble-line"></i></a>
               </div>
            </article>
          
         </div>
      </section>
    </div>
  )
}

export default Projects