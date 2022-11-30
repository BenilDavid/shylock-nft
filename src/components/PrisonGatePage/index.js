import React, { useState } from "react";
import "./PrisonGatePage.scss";
import { useNavigate } from "react-router-dom";
import BackArrow from "../../assets/Images/back-arrow.png";

const PrisonGatePage = () => {
  let navigate = useNavigate();

  const [speechCount, setspeechCount] = useState(1);

  const handleNext = () => {
    setspeechCount(speechCount + 1);
  };
  const handleBack = () => {
    setspeechCount(speechCount - 1);
  };

  return (
    <div className="prison-gate-main">
      <div className="d-flex">
        <button className="back-btn" onClick={() => navigate("/levels")}>
          <img className="back-icon me-2" src={BackArrow} alt="back" />
          Go Back
        </button>
      </div>

      {speechCount === 1 ? (
        <>
          <div className="dialog-1 animate__animated animate__bounceInRight">
            <div className="left-point"></div>
            <span>
              1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              harum optio distinctio! Provident ratione aspernatur atque nisi
              velit debitis excepturi!
              <span className="ms-2 text-decoration-underline cursor-pointer" onClick={handleNext}>next</span>
            </span>
          </div>
        </>
      ) : speechCount === 2 ? (
        <>
        <div className="dialog-2 animate__animated animate__bounceInLeft">
        <div className="right-point"></div>
        <span>
          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima harum
          optio distinctio! Provident ratione aspernatur atque nisi velit
          debitis excepturi!
          <span className="ms-2 me-2 text-decoration-underline cursor-pointer" onClick={handleBack}>back</span>
          <span className="ms-2 text-decoration-underline cursor-pointer" onClick={handleNext}>next</span>
        </span>
      </div>
        </>
      ) : speechCount === 3 ? (
        <>
         <div className="dialog-1 animate__animated animate__bounceInRight">
            <div className="left-point"></div>
            <span>
              3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              harum optio distinctio! Provident ratione aspernatur atque nisi
              velit debitis excepturi!
              <span className="ms-2 me-2 text-decoration-underline cursor-pointer" onClick={handleBack}>back</span>
              <span className="ms-2 text-decoration-underline cursor-pointer" onClick={() => navigate("/prison")}>Go in</span>
            </span>
          </div>
        </>
      ) : (
        ""
      )}

      
    </div>
  );
};

export default PrisonGatePage;
