import React, { useState, useEffect } from "react";
import "./AboutMePage.css";

function AboutView() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
    <div> 
      <h1 className="text-5xl text-center mt-8 mb-5">About me</h1>
      <div className="flex mb-[111px]">
        <PortraitImage isLoaded={isLoaded} />
        <div className="p-12 w-1/2 h-1/2">
          <h1 className="text-3xl mb-5">Hugo Moreira</h1>
          <p className="mb-3">
            I'm a Junior Fullstack developer based in porto, Portugal that also
            has a passion for photography and travel. Movies and games and other
            types of media are also part of my main hobbies, cinematography in
            films beeing one of the the main influences for some of my work in
            photography.
          </p>
          <p className="mb-3">
            Since my early teenage years, I've had a keen eye for capturing
            life's precious moments. Whether it's the beauty of nature, the
            complexity of human emotions, or the simplicity of everyday scenes,
            I find joy in preserving these instants through my lens.
          </p>
          <p className="mb-3">
            Moving forward, I aim to continue blending my technical skills with
            my artistic vision. I hope to work on projects that combine
            innovative web solutions with visually stunning designs, perhaps
            even incorporating elements of photography and cinematography
            directly into my coding work.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

const PortraitImage = ({ isLoaded }) => (
  <div className={`portrait-image-container ${isLoaded ? "loaded" : ""}`}>
    <img src="src/assets/images/portrait/IMG_7981.jpg" alt="Portrait" />
  </div>
);

export default AboutView;

//div created for mediaqueries later