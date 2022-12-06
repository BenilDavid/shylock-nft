import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import { useNavigate } from "react-router-dom";
import shylockBg from "../../assets/Images/homePage/landing-page-bg.png";
import ReactPlayer from 'react-player';
import aiAudio from '../../assets/Audio/main-ai.mp3';

const MainPage = () => {
  let navigate = useNavigate();

  // const [zoomIn, setzoomIn] = useState(false);
  // const [loader, setLoader] = useState(true);
  const [aiAudioPlay, setAiAudioPlay] = useState(false);

  useEffect(() => {
    setAiAudioPlay(true);
  }, [])

  const handleEnterComputer = () => {
    // setzoomIn(true);
      navigate("/levels");
  };

  return (
    <>
      {/* <Loader loader={loader} /> */}
      <div className="main-container">
      <ReactPlayer className="d-none" url={aiAudio} playing={aiAudioPlay} controls={false} volume={1} muted={false} loop={false} />
        <img className="shylock-bg-image" src={shylockBg} alt="background" />
        <button
          className="enter-btn cursor-pointer"
          onClick={handleEnterComputer}
        >
          The Vault
        </button>
      </div>
    </>
  );
};

export default MainPage;
