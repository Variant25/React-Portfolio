import React from 'react';
import { FaRegObjectGroup } from 'react-icons/fa';

function Certification() {
  return (
    <div>
      <section className="services section">
        <h2 className="section__title-2"><span>Certifications</span></h2>
        <div className="services__container container grid">
          <a href="https://coursera.org/share/e2415438afa86da8383957bac831c385">
            <article className="services__card">
              <div className="services__border"></div>
              <div className="services__content">
                <div className="services__icon">
                  <div className="services__box"></div>
                  <FaRegObjectGroup />
                </div>
                <h2 className="services__title">Google UX Design</h2>
                <p className="services__description"></p>
              </div>
            </article>
          </a>
          <a href="https://coursera.org/share/7b3a91f2349bb3d73d4c30b1efbea39f">
            <article className="services__card">
              <div className="services__border"></div>
              <div className="services__content">
                <div className="services__icon">
                  <div className="services__box"></div>
                  <FaRegObjectGroup />
                </div>
                <h2 className="services__title">Introduction to Git and Github</h2>
                <p className="services__description"></p>
              </div>
            </article>
          </a>
          <a href="https://coursera.org/share/5f843db22c7399c70dabcb8a9d58c69c">
            <article className="services__card">
              <div className="services__border"></div>
              <div className="services__content">
                <div className="services__icon">
                  <div className="services__box"></div>
                  <FaRegObjectGroup />
                </div>
                <h2 className="services__title">Crash Course on Python</h2>
                <p className="services__description"></p>
              </div>
            </article>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Certification;
