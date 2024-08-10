import React from 'react'

import image1 from '../assets/images/home-perfil1.jpg'
import image2 from '../assets/images/curved-arrow.svg'
import image3 from '../assets/images/random-lines.svg'
import image4 from '../assets/images/about-prefil.jpg'
function Profile() {
  return (
    <div>
          <section class="home section" id="home">
         <div class="home__container container grid">
            <h1 class="home__name">Ayush Pandey</h1>
            <div class="home__prefil">
               <div class="home__image">
                  <img src={image1}   alt="image" class="home__img"/>
                  <div class="home__shadow"></div>
                  <img src={image2} alt="" class="home__arrow"/>
                  <img src={image3} alt="" class="home__line"/>
                  <div class="geometric-box"></div>
               </div>
               <div class="home__social">
                  
                  <a href="https://www.linkedin.com/in/ayush-pandey-316807240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" class="home__social-link"><i class="ri-linkedin-box-fill"></i></a>
                  <a href="https://github.com/Variant25" target="_blank" class="home__social-link"><i class="ri-github-fill"></i></a>
               </div>
            </div>
            <div class="home__info">
               <p class="home__description"><b>Web Developer</b>, with knowledge in web development and design, I offer the best projects resulting in quality work.</p>
               <a href="#about" class="home__scroll"><div class="home__scroll-box"><i class="ri-arrow-down-s-line"></i></div><span class="home__scroll-text">Scroll Down</span></a>
            </div>
         </div>
      </section>

      <section class="about section" id="about">
         <div class="about__container container grid">
            <h2 class="section__title-1"><span>About Me</span></h2>
            <div class="about__prefil">
               <div class="about__image">
                  <img src={image4} alt="image" class="about__img"/>
                  <div class="about__shadow"></div>
                  <div class="geometric-box"></div>
                  <img src={image3} alt="" class="about__line"/>
                  <div class="about__box"></div>
               </div>
            </div>
            <div class="about__info">
               <p class="about__description">Passionate about creating <b>Web Pages</b> with <b>UI/UX User Interface</b>, Results-driven and detail-oriented Computer Science student with a passion for innovative problemsolving and a commitment to diversity and inclusion in technology, Currently pursuing B.Tech in
                  Computer Science and Engineering.</p>
               <ul class="about__list"><li class="about__item"><b>My Skills Are:</b> HTML, CSS, JavaScript, React, Node.js, Mysql & MongoDB, Git & GitHub, Bootstrap,  & Figma.</li></ul>
               <div class="about__buttons">
                  <a href="#contact" class="button"><i class="ri-send-plane-line"></i>Contact Me</a>
                  <a href="https://www.linkedin.com/in/ayush-pandey-316807240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" class="button__ghost"><i class="ri-linkedin-box-fill"></i></a>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default Profile