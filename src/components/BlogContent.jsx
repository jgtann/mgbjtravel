import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import './BlogContent.css';

const BlogContent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch posts from Firestore in real-time
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching posts:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <article className="visual-journal" id="article">
      
      {/* Intro Hardcoded Chapter */}
      <section className="visual-chapter">
        <div className="container narrative-text">
          <p className="lead-paragraph text-center">
            The Mekong doesn't just flow through Laos; it breathes life into it. Every morning begins with the thick mist rolling off the waters, slowly revealing a country untouched by the frantic pace of the modern world.
          </p>
        </div>
      </section>

      {/* Dynamic Journal Entries from CMS */}
      {loading ? (
        <div className="container text-center"><p>Loading journal entries...</p></div>
      ) : (
        posts.map((post, index) => {
          const isDark = index % 2 !== 0; // Alternate themes

          return (
            <section key={post.id} className={`visual-chapter ${isDark ? 'dark-chapter' : 'bg-alt'}`}>
              <div className="container narrative-text">
                <h2 className={`chapter-title text-center ${isDark ? 'text-gold' : ''}`}>{post.title}</h2>
                <p className={`lead-paragraph text-center ${isDark ? 'text-white' : ''}`}>
                  {post.content}
                </p>
              </div>
              
              {post.mediaType === 'video' ? (
                <div className="video-container">
                  <video autoPlay loop muted playsInline className="embedded-video">
                    <source src={post.mediaUrl} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div className="full-bleed-media">
                  <img src={post.mediaUrl} alt={post.title} loading="lazy" />
                  <div className="media-caption">{post.title}</div>
                </div>
              )}
            </section>
          );
        })
      )}

      {/* Hardcoded Fallback if no posts exist yet */}
      {!loading && posts.length === 0 && (
        <section className="visual-chapter bg-alt">
          <div className="container text-center">
            <h2 className="chapter-title text-center">More stories coming soon.</h2>
            <p>The owner hasn't published any dynamic posts yet.</p>
          </div>
        </section>
      )}

    </article>
  );
};

export default BlogContent;
