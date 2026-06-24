import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './AuthorBio.css';

const AuthorBio = () => {
  const { t } = useLanguage();

  return (
    <section className="author-bio-section" id="about">
      <div className="container author-bio-container">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="River" className="author-bio-avatar" />
        <div className="author-bio-content">
          <h3>{t('aboutTitle')}</h3>
          <p>{t('aboutDesc')}</p>
          <div className="author-socials">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;
