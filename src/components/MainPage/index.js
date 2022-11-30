import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import smoke from "../../assets/Images/smoke-0.png";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import GunImage from "../../assets/Images/homePage/gun.png";
import ashTrayImage from "../../assets/Images/homePage/ashtray.png";
import catImage from "../../assets/Images/homePage/cat.png";
import computerImage from "../../assets/Images/homePage/computer.png";
import keyboardImage from "../../assets/Images/homePage/keyboard.png";
import newspaperImage from "../../assets/Images/homePage/newspaper.png";
import telephoneImage from "../../assets/Images/homePage/telephone.png";
// import { Loader } from '../Common/Loader';
import shylockBg from "../../assets/Images/homePage/main-bg.jpg";

const MainPage = () => {
  let navigate = useNavigate();

  const [isOpen, setisOpen] = useState(false);
  const [zoomIn, setzoomIn] = useState(false);
  const [hideEnterBtn, sethideEnterBtn] = useState(false);
  // const [loader, setLoader] = useState(true);

  useEffect(() => {
    //  setTimeout(() => {
    //   setLoader(false);
    //  }, 2000);
  }, []);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  const handleEnterComputer = () => {
    // const bg = document.querySelector(".shylock-bg-image");
    // console.log(bg);
    sethideEnterBtn(!hideEnterBtn);
    setzoomIn(true);
    setTimeout(() => {
      navigate("/levels");
    }, 3000);
  };

  return (
    <>
      {/* <Loader loader={loader} /> */}
      <div className="main-container">
        <img className="shylock-bg-image" src={shylockBg} alt="background" />
        <Header isOpen={isOpen} toggle={toggle} />
        {/* smoke effect */}
       <div className="computer-container">
       <img
          className={`computer ${zoomIn ? "zoom" : ""}`}
          alt="computer"
          src={computerImage}
        ></img> 
        <img
          className="keyboard"
          alt="keyboard"
          src={keyboardImage}
        ></img>
         <button
          className={`enter-btn cursor-pointer ${
            hideEnterBtn ? "animate__animated animate__fadeOut" : ""
          }`}
          onClick={handleEnterComputer}
        >
          Enter
        </button>
       </div>
        <img className="gun" alt="gun" src={GunImage}></img>
        <img className="newspaper" alt="newspaper" src={newspaperImage}></img>
        <img className="ash-tray" alt="ash tray" src={ashTrayImage}></img>
        <img className="telephone" alt="telephone" src={telephoneImage}></img>
        <img className="cat" alt="cat" src={catImage}></img>

        <img className="cigratte-smoke" alt="smoke" src={smoke} />
        <img className="cigratte-smoke" alt="smoke" src={smoke} />
        {/* <img className='cigratte-smoke' src={smoke} /> */}
        <div className="firepit">
          <div className="fire">
            <div className="spark"></div>
            <div className="spark"></div>
            <div className="spark"></div>
            <div className="spark"></div>
            <div className="spark"></div>
            <div className="spark"></div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default MainPage;
