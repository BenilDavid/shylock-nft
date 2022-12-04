import React, { useState, useEffect } from "react";
import "./PrisonGatePage.scss";
import { useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import ReactPlayer from 'react-player';
import bgAudio from '../../assets/Audio/bg-audio.mp3';
import speechAudio from '../../assets/Audio/speech.mp3';
import PrisonGateBgImage from '../../assets/Images/prison-gate-bg.webp';

const PrisonGatePage = () => {
  let navigate = useNavigate();


  const [speechCount, setspeechCount] = useState(1);
  const [bgAudioPlay, setbgAudioPlay] = useState(false);

  useEffect(() => {
    setbgAudioPlay(true);
  }, [])

  const handleNext = () => {
    setspeechCount(speechCount + 1);
  };
  const handleBack = () => {
    setspeechCount(speechCount - 1);
  };

  return (
    <div className="prison-gate-main">
      <img className="prison-gate-bg-image" src={PrisonGateBgImage} alt="prison gate" />
      <ReactPlayer className="d-none" url={bgAudio} playing={bgAudioPlay} controls={false} volume={1} muted={false} loop={true} />
      <ReactPlayer className="d-none" url={speechAudio} playing={bgAudioPlay} controls={false} volume={1} muted={false} />

      <div className="d-flex">
        <button className="back-btn" onClick={() => navigate("/levels")}>
          Back
        </button>
      </div>
      {speechCount === 1 ? (
        <>
          <div className="dialog-1 animate__animated animate__bounceInRight">
            <div className="left-point"></div>
            <div>

              <Typewriter
                options={{
                  strings: ['1. Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
                  autoStart: speechCount === 1 ? true : false,
                  loop: true,
                  delay: 40,
                  pauseFor: 100000,
                }}
              />

              <span className="ms-2 text-decoration-underline cursor-pointer text-white" onClick={handleNext}>next</span>
            </div>
          </div>
        </>
      ) : speechCount === 2 ? (
        <>
          <div className="dialog-2 animate__animated animate__bounceInLeft">
            <div className="right-point"></div>
            <div>

              <Typewriter
                options={{
                  strings: ['2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
                  autoStart: speechCount === 2 ? true : false,
                  loop: true,
                  delay: 40,
                  pauseFor: 100000,
                }}
              />

              <span className="ms-2 me-2 text-decoration-underline cursor-pointer text-white" onClick={handleBack}>back</span>
              <span className="ms-2 text-decoration-underline cursor-pointer text-white" onClick={handleNext}>next</span>
            </div>
          </div>
        </>
      ) : speechCount === 3 ? (
        <>
          <div className="dialog-1 animate__animated animate__bounceInRight">
            <div className="left-point"></div>
            <div>

              <Typewriter
                options={{
                  strings: ['3. Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit.'],
                  autoStart: speechCount === 3 ? true : false,
                  loop: true,
                  delay: 40,
                  pauseFor: 100000,
                }}
              />

              <span className="ms-2 me-2 text-decoration-underline cursor-pointer text-white" onClick={handleBack}>back</span>
              <span className="ms-2 text-decoration-underline cursor-pointer text-white" onClick={() => navigate("/prison")}>Go in</span>
            </div>
          </div>
        </>
      ) : (
        ""
      )}


    </div>
  );
};

export default PrisonGatePage;
