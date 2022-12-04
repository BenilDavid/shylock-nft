import React, {useState} from 'react'
import './Prison.scss';
import PrisonBgImage from '../../assets/Images/prisonPage/jail-case.jpg';
import PrisonBgCleanImage from '../../assets/Images/prisonPage/clean-prison.jpg';
import { useNavigate } from "react-router-dom";

const PrisonPage = () => {
  let navigate = useNavigate();

  const [switchOn, setswitchOn] = useState(false);
  return (
   <>
      <img className={`prison-bg-image ${switchOn ? "" : "black-overlay"}`} src={switchOn ? PrisonBgImage : PrisonBgCleanImage} alt="prison bg" />
    <div className='prison-main'>
      {/* <img className='prison-bg-image' src={PrisonBgImage} alt="prison bg" /> */}
        <div className="d-flex"> 
        <button className="back-btn" onClick={() => navigate("/levels")}>
          Back
        </button>
        <button onClick={() => setswitchOn(!switchOn)}>switch</button>
        </div>
    </div>
   </>
  )
}

export default PrisonPage