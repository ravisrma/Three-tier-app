import React, { useState } from 'react';
import './FloatingButton.css';

const FloatingButton = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="floating-button-container">
      <button
        className={`floating-button ${open ? 'open' : ''}`}
        onClick={toggleOpen}
      >
        <span className="material-icons">{open ? 'close' : 'add'}</span>
      </button>
      <div className={`floating-links ${open ? 'show' : ''}`}>
        <a href="https://medium.com/@ravisharma0527" target="_blank" rel="noopener noreferrer" className="floating-link">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/medium.svg" alt="Medium" />
        </a>
        <a href="https://www.linkedin.com/in/ravi-0527/" target="_blank" rel="noopener noreferrer" className="floating-link">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/ravisrma" target="_blank" rel="noopener noreferrer" className="floating-link">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg" alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/itsravisrma/" target="_blank" rel="noopener noreferrer" className="floating-link">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg" alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default FloatingButton;