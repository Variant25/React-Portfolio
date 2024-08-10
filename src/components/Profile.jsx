import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiSendPlaneLine, RiArrowDownSLine } from 'react-icons/ri';

import image1 from '../assets/images/home-prefil.jpg';
import image2 from '../assets/images/curved-arrow.svg';
import image3 from '../assets/images/random-lines.svg';
import image4 from '../assets/images/about-prefil.jpg';

function Profile() {
  return (
    <div>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <h1 className="home__name">Ayush Pandey</h1>
          <div className="home__prefil">
            <div className="home__image">
              <img src={image1} alt="image" className="home__img" />
              <div className="home__shadow"></div>
              <img src={image2} alt="" className="home__arrow" />
              <img src={image3} alt="" className="home__line" />
              <div className="geometric-box"></div>
            </div>
            <div className="home__social">
              <a href="https://www.linkedin.com/in/ayush-pandey-316807240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="home__social-link">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Variant25" target="_blank" className="home__social-link">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="home__info">
            <p className="home__description"><b>Web Developer</b>, with knowledge in web development and design, I offer the best projects resulting in quality work.</p>
            <a href="#about" className="home__scroll">
              <div className="home__scroll-box">
                <RiArrowDownSLine />
              </div>
              <span className="home__scroll-text">Scroll Down</span>
            </a>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about__container container grid">
          <h2 className="section__title-1"><span>About Me</span></h2>
          <div className="about__prefil">
            <div className="about__image">
              <img src={image4} alt="image" className="about__img" />
              <div className="about__shadow"></div>
              <div className="geometric-box"></div>
              <img src={image3} alt="" className="about__line" />
              <div className="about__box"></div>
            </div>
          </div>
          <div className="about__info">
            <p className="about__description">Passionate about creating <b>Web Pages</b> with <b>UI/UX User Interface</b>, Results-driven and detail-oriented Computer Science student with a passion for innovative problem-solving and a commitment to diversity and inclusion in technology, Currently pursuing B.Tech in Computer Science and Engineering.</p>
            <ul className="about__list">
              <li className="about__item"><b>My Skills Are:</b> HTML, CSS, JavaScript, React, Node.js, Mysql & MongoDB, Git & GitHub, Bootstrap, & Figma.</li>
            </ul>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
