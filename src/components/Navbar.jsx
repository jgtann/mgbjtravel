import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-wide navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            {t('brandFirst')}<span>{t('brandSecond')}</span>
          </Link>
        </div>
        
        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>{t('home')}</Link>
          <a href="/#article" onClick={() => setMobileMenuOpen(false)}>{t('latestPost')}</a>
          <Link to="/login" onClick={() => setMobileMenuOpen(false)}>{t('admin')}</Link>
          <button className="btn btn-primary nav-btn">{t('subscribe')}</button>
          
          <button onClick={toggleLanguage} className="btn nav-btn" style={{ background: 'transparent', border: '1px solid currentColor', padding: '0.4rem 1rem' }}>
            {language === 'en' ? '中文' : 'EN'}
          </button>
        </div>

        <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
