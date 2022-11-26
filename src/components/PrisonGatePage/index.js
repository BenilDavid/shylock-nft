import React from "react";
import "./PrisonGatePage.scss";
import { useNavigate } from "react-router-dom";
import BackArrow from '../../assets/Images/back-arrow.png';

const PrisonGatePage = () => {
  let navigate = useNavigate();

  return (
    <div className="prison-gate-main">
       <div className='d-flex'>
          <button className='back-btn' onClick={() => navigate("/levels")}><img className='back-icon me-2' src={BackArrow} alt="back" />
          Go Back
          </button>
        </div>

      <div class="dialog-1 animate__animated animate__bounceIn">
        <div class="left-point"></div>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima harum
          optio distinctio! Provident ratione aspernatur atque nisi velit
          debitis excepturi!
        </span>
      </div>
    </div>
  );
};

export default PrisonGatePage;
