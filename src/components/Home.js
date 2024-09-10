import React from 'react';
import './Home.css'; // Ensure you have this CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <div className="left-section">
        {/* Instagram Post Embed */}
        <iframe
          src="https://www.instagram.com/p/C_uYdGFxINm/embed"
          width="400"
          height="480"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
          allowFullScreen
          title="Instagram Post"
        ></iframe>
        <p>
          <a href="https://www.instagram.com/pm_powerhouse/" target="_blank" rel="noopener noreferrer">
            View more on Instagram
          </a>
        </p>
      </div>

      <div className="right-section">
        <h1>Hey!<br />This is Shrutha, nice to meet you.<br />I am a Senior Product Manager.</h1>
        <p>Connect with me on social media!</p>

        <div className="social-links">
          <a href="https://linkedin.com/in/shruthakeerthi" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/speddire" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/pm_powerhouse/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" className="social-icon" />
          </a>
        </div>

        <div className="spotify-status">
          <p>Currently Offline on Spotify</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
