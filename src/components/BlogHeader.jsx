import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './BlogHeader.css';

const BlogHeader = () => {
  const { t } = useLanguage();

  return (
    <header className="blog-header">
      <div className="blog-header-bg">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="bg-video"
          poster="https://images.unsplash.com/photo-1540843641775-4712531d0d93?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4" type="video/mp4" />
        </video>
        <div className="bg-overlay"></div>
      </div>
      
      <div className="container blog-header-content animate-fade-in">
        <span className="category">{t('category')}</span>
        <h1>{t('title')}</h1>
        <div className="meta">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Author" className="author-avatar" />
          <div className="meta-text">
            <span className="author-name">{t('authorLine')}</span>
            <span className="publish-date">{t('publishLine')}</span>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </div>
    </header>
  );
};

export default BlogHeader;
