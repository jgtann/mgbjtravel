import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import BlogHeader from './components/BlogHeader';
import InteractiveMap from './components/InteractiveMap';
import BlogContent from './components/BlogContent';
import AuthorBio from './components/AuthorBio';
import Footer from './components/Footer';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import ParallaxSection from './components/ParallaxSection';
import './App.css';

// Public layout wrapper
const PublicBlog = () => (
  <div className="app-container">
    <Navbar />
    <main>
      <BlogHeader />
      
      {/* 1. Map Concept */}
      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" height="300px" />
      <InteractiveMap />
      
      {/* 2. The Mekong River */}
      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" height="400px" />
      <BlogContent />
      
      {/* 3. Beautiful Greenery */}
      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1582236111161-1259a449d05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" height="400px" />
      <AuthorBio />

      {/* 4. Laughing People / Culture */}
      <ParallaxSection imageUrl="https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" height="400px" />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PublicBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
