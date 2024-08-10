import React from 'react'

function Footer() {
  return (
    <div>
        <footer class="footer">
      <div class="footer__container container grid">
         <ul class="footer__links">
            <li><a href="#about" class="footer__link">About</a></li>
            <li><a href="#services" class="footer__link">Certifications</a></li>
            <li><a href="#projects" class="footer__link">Projects</a></li>
         </ul>
         <span class="footer__copy">&#169; All Rights Reserved By <a href="#">Ayush Pandey.</a></span>
      </div>
   </footer>

   <a href="#" class="scrollup" id="scroll-up"><i class="ri-arrow-up-s-line"></i></a>
    </div>
  )
}

export default Footer