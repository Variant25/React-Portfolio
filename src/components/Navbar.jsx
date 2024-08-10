import React, { useEffect } from 'react';
import { RiCloseLine, RiMenu4Line, RiMoonLine } from 'react-icons/ri';

function Navbar() {
  useEffect(() => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLink = document.querySelectorAll('.nav__link');

 
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }


    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }


    const linkAction = () => {
      navMenu.classList.remove('show-menu');
    };

    navLink.forEach(n => n.addEventListener('click', linkAction));


    const shadowHeader = () => {
      const header = document.getElementById('header');
      if (window.scrollY >= 50) {
        header.classList.add('shadow-header');
      } else {
        header.classList.remove('shadow-header');
      }
    };

    window.addEventListener('scroll', shadowHeader);

   
    return () => {
      if (navToggle) navToggle.removeEventListener('click', () => navMenu.classList.add('show-menu'));
      if (navClose) navClose.removeEventListener('click', () => navMenu.classList.remove('show-menu'));
      navLink.forEach(n => n.removeEventListener('click', linkAction));
      window.removeEventListener('scroll', shadowHeader);
    };
  }, []);

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <span className="nav__logo-circle">A</span>
            <span className="nav__logo-name">Ayush Pandey</span>
          </a>
          <div className="nav__menu" id="nav-menu">
            <span className="nav__title">Menu</span>
            <h3 className="nav__name">Ayush</h3>
            <ul className="nav__list">
              <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
              <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
              <li className="nav__item"><a href="#projects" className="nav__link">Projects</a></li>
            </ul>
            <div className="nav__close" id="nav-close"><RiCloseLine /></div>
          </div>
          <div className="nav--buttons">
        
          </div>
          <div className="nav__toggle" id="nav-toggle"><RiMenu4Line /></div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
