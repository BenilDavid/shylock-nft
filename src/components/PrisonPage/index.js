import React, { useState } from 'react'
import './Prison.scss';
import './switch.scss';
import PrisonBgImage from '../../assets/Images/prisonPage/jail-case.jpg';
import PrisonBgCleanImage from '../../assets/Images/prisonPage/clean-prison.jpg';
import { useNavigate } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import './LightButton.scss';

const PrisonPage = () => {
  let navigate = useNavigate();

  const [switchOn, setswitchOn] = useState(false);
  // const [pressed, setPressed] = useState(false);
  return (
    <>
      <img className={`prison-bg-image ${switchOn ? "" : "black-overlay"}`} src={switchOn ? PrisonBgImage : PrisonBgCleanImage} alt="prison bg" />
      <div className='prison-main'>
      <div className="hanging-rope" data-tip="rope" data-place="right" data-effect="solid"></div>
      {/* <div className="bulb" data-tip="bulb"></div> */}
      <div className="blood" data-tip="blood"></div>
      <div className="bed" data-tip="bed"></div>
      <div className="window" data-tip="window"></div>
      <div className="body-mark" data-tip="death mark"></div>
      <div className="toilet" data-tip="toilet"></div>
      <div className="water" data-tip="water"></div>
      <ReactTooltip />
        {/* <img className='prison-bg-image' src={PrisonBgImage} alt="prison bg" /> */}
        <div className="d-flex justify-content-between">
          <button className="back-btn" onClick={() => navigate("/prison-gate")}>
            Back
          </button>
          {/* <button onClick={() => setswitchOn(!switchOn)}>switch</button> */}

            {/* <label class="rocker rocker-small">
              <input type="checkbox" onClick={() => setswitchOn(!switchOn)}/>
              <span class="switch-left">on</span>
              <span class="switch-right">off</span>
            </label> */}

<button className={`red-btn ${switchOn ? "pressed" : ""}`} id="everybodydance" onClick={() => setswitchOn(!switchOn)}><span>{!switchOn ? "on" : "off"}</span></button>

        </div>
      </div>
    </>
  )
}

export default PrisonPage