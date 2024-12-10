import React, { useState, useEffect } from 'react';
import './AboutMePage.css';

function AboutView() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <h1 className="addlocaltitle">About me</h1>
      <div className="aboutme-section">
      <PortraitImage isLoaded={isLoaded}/> 
      <div className="self-portrait">
      </div>

      <div className="aboutcontainer">
        <h1>Hugo Moreira</h1>
        <p>
          I'm a junior Fullstack developer based in porto, Portugal that also has a passion for photography and travel.
          Movies and games and other types of media are also part of my main hobbies, cinematography in films beeing one of the the main influences for some of my work in photography. 
        </p>
        <p>
          Since my early teenage years, I've had a keen eye for capturing life's precious moments. Whether it's the beauty of nature, the complexity of human emotions, or the simplicity of everyday scenes, I find joy in preserving these instants through my lens.
        </p>
        <p>
          Moving forward, I aim to continue blending my technical skills with my artistic vision. I hope to work on projects that combine innovative web solutions with visually stunning designs, perhaps even incorporating elements of photography and cinematography directly into my coding work.
        </p>
      </div>
      </div>
    </>
  );
}

const PortraitImage = ({ isLoaded }) => (
  <div className={`portrait-image-container ${isLoaded ? 'loaded' : ''}`}>
    <img src="src/assets/images/portrait/IMG_7981.jpg" alt="Your Name" />
  </div>
);

export default AboutView;

//<img src="src/assets/images/portrait/IMG_7981.jpg" alt="portrait here"></img>
// inserir no background fotos minhas ?
