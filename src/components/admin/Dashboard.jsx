import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './Admin.css';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('image'); // 'image' or 'video'
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate('/login');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !file) {
      setMessage('Please fill all fields and select a file.');
      return;
    }

    setUploading(true);
    setMessage('');

    try {
      // 1. Upload File to Storage
      const storageRef = ref(storage, `journal_media/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      // 2. Save Post to Firestore
      await addDoc(collection(db, 'posts'), {
        title,
        content,
        mediaUrl: downloadURL,
        mediaType: type,
        createdAt: serverTimestamp()
      });

      setMessage('Post successfully published!');
      setTitle('');
      setContent('');
      setFile(null);
      e.target.reset();
    } catch (error) {
      console.error('Error adding document: ', error);
      setMessage('Error publishing post. Check console.');
    } finally {
      setUploading(false);
    }
  };

  if (loading) return <div className="admin-container"><p>Loading...</p></div>;

  return (
    <div className="admin-container" style={{ alignItems: 'flex-start' }}>
      <div className="dashboard-box">
        <div className="dashboard-header">
          <h2>Admin Dashboard</h2>
          <div>
            <button onClick={() => navigate('/')} className="btn btn-secondary" style={{ marginRight: '1rem' }}>View Blog</button>
            <button onClick={handleLogout} className="btn btn-danger">Log Out</button>
          </div>
        </div>

        {message && <div className={message.includes('Error') || message.includes('Please') ? 'error-msg' : 'success-msg'}>{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Post Title</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="e.g., Morning Mist in Luang Prabang"
            />
          </div>

          <div className="form-group">
            <label>Journal Entry</label>
            <textarea 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              placeholder="Write your story here..."
            />
          </div>

          <div className="form-group">
            <label>Media Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)} style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}>
              <option value="image">Image (High Quality Photo)</option>
              <option value="video">Video (Cinematic Clip)</option>
            </select>

            <label>Upload Media File</label>
            <input 
              type="file" 
              accept={type === 'image' ? 'image/*' : 'video/*'} 
              onChange={handleFileChange} 
            />
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={uploading}>
            {uploading ? 'Publishing...' : 'Publish Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
