import React from 'react'

function Navbar() {
  return (
    <>
        <header class="header" id="header">
<nav class="nav container">
   <a href="#" class="nav__logo">
      <span class="nav__logo-circle">A</span>
      <span class="nav__logo-name">Ayush Pandey</span>
   </a>
   <div class="nav__menu" id="nav-menu">
      <span class="nav__title">Menu</span>
      <h3 class="nav__name">Ayush</h3>
      <ul class="nav__list">
         <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
         <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
         <li class="nav__item"><a href="#projects" class="nav__link">Projects</a></li>
         <li class="nav__item"><a href="#contact" class="nav__link">Contact Me</a></li>
      </ul>
      <div class="nav__close" id="nav-close"><i class="ri-close-line"></i></div>
   </div>
   <div class="nav--buttons">
      <i class="ri-moon-line change-theme" id="theme-button"></i>
   </div>
   <div class="nav__toggle" id="nav-toggle"><i class="ri-menu-4-line"></i></div>
</nav>
</header>
    </>
  )
}

export default Navbar