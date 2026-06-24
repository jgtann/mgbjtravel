import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>{t('brandFirst')}<span className="text-gradient">{t('brandSecond')}</span></h2>
            <p>{t('footerDesc')}</p>
            <div className="social-links">
              <a href="#" className="glass-panel"><i className="fab fa-twitter"></i></a>
              <a href="#" className="glass-panel"><i className="fab fa-instagram"></i></a>
              <a href="#" className="glass-panel"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="glass-panel"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>{t('quickLinks')}</h3>
            <ul>
              <li><a href="#about">{t('aboutUs')}</a></li>
              <li><a href="#destinations">{t('destinations')}</a></li>
              <li><a href="#experiences">{t('experiences')}</a></li>
              <li><a href="#contact">{t('contact')}</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>{t('support')}</h3>
            <ul>
              <li><a href="#">{t('faq')}</a></li>
              <li><a href="#">{t('terms')}</a></li>
              <li><a href="#">{t('privacy')}</a></li>
              <li><a href="#">{t('help')}</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3>{t('newsletterTitle')}</h3>
            <p>{t('newsletterDesc')}</p>
            <div className="newsletter-form">
              <input type="email" placeholder={t('emailPlaceholder')} />
              <button className="btn btn-primary"><i className="fas fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MGBJ Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
