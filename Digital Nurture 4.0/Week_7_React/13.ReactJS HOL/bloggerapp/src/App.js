import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [showComponent, setShowComponent] = useState('all'); // 'book', 'blog', 'course', 'all'

  const renderComponent = () => {
    // 1. if-else
    if (showComponent === 'book') return <BookDetails />;
    if (showComponent === 'blog') return <BlogDetails />;
    if (showComponent === 'course') return <CourseDetails />;

    // 2. switch-case
    switch (showComponent) {
      case 'all':
        return (
          <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
            <BookDetails />
            <BlogDetails />
            <CourseDetails />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Blogger App</h2>

      {/* Toggle Buttons */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setShowComponent('book')}>Show Book</button>
        <button onClick={() => setShowComponent('blog')}>Show Blog</button>
        <button onClick={() => setShowComponent('course')}>Show Course</button>
        <button onClick={() => setShowComponent('all')}>Show All</button>
      </div>

      {/* 3. Short-circuit rendering */}
      {showComponent !== 'all' && (
        <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
          {showComponent === 'book' && <BookDetails />}
          {showComponent === 'blog' && <BlogDetails />}
          {showComponent === 'course' && <CourseDetails />}
        </div>
      )}

      {/* 4. Function returning JSX using switch/if */}
      {showComponent === 'all' && renderComponent()}
    </div>
  );
}

export default App;
