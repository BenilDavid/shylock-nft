import React, { useEffect, useState } from 'react'
import './LevelsPage.scss';
import './SystemBoot.scss';
import LockedIcon from '../../assets/Images/padlock.png';
import PlayIcon from '../../assets/Images/play-btn.png';
import BackArrow from '../../assets/Images/back-arrow.png';
import { useNavigate } from "react-router-dom";

const LevelsPage = () => {
  let navigate = useNavigate();
  const [Boot, setBoot] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBoot(false);
    }, 3000);
  }, [])

  return (
    <>
      <div className='levels-main'>

        {Boot ?
          <>
<div className="spinner"></div>
          </> :
          <>
            <div className='d-flex'>
              <button className='back-btn' onClick={() => navigate("/")}><img className='back-icon me-2' src={BackArrow} alt="back" />
                Go Back
              </button>
            </div>
            <div className='levels-container'>
              <div className='case-list-container'>
                <h3 className='case-list-heading mb-4'>Coldcase Vault</h3>
                <ul className='case-list'>
                  <li className='unlocked' onClick={() => navigate("/prison-gate")}>
                    <span>Suicide</span>
                    <img className='unlocked-icon' src={PlayIcon} alt="unlocked" />
                  </li>
                  <li className='locked'>
                    <span>Homicide</span>
                    <img className='locked-icon' src={LockedIcon} alt="locked" />
                  </li>
                  <li className='locked'>
                    <span>Robbery</span>
                    <img className='locked-icon' src={LockedIcon} alt="locked" />
                  </li>
                  <li className='locked'>
                    <span>Narcotics</span>
                    <img className='locked-icon' src={LockedIcon} alt="locked" />
                  </li>
                  <li className='locked'>
                    <span>Godfather</span>
                    <img className='locked-icon' src={LockedIcon} alt="locked" />
                  </li>
                </ul>
              </div>
            </div>
          </>}
      </div>
    </>
  )
}

export default LevelsPage