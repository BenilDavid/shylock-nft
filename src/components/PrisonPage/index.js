import React from 'react'
import './Prison.scss';
// import PrisonBgImage from '../../assets/Images/prisonPage/clean-prison.jpg';
import { useNavigate } from "react-router-dom";

const PrisonPage = () => {
  let navigate = useNavigate();

  return (
    <div className='prison-main'>
      {/* <img className='prison-bg-image' src={PrisonBgImage} alt="prison bg" /> */}
        <div className="d-flex"> 
        <button className="back-btn" onClick={() => navigate("/levels")}>
          Back
        </button>
        </div>
    </div>
  )
}

export default PrisonPage