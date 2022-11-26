import React, {useState} from 'react'
import './MainPage.scss';
import smoke from '../../assets/Images/smoke-0.png';
import { useNavigate } from "react-router-dom";
import Header from '../Header';
import GunImage from '../../assets/Images/homePage/gun.png';
import ashTrayImage from '../../assets/Images/homePage/ashtray.png';
import catImage from '../../assets/Images/homePage/cat.png';
import computerImage from '../../assets/Images/homePage/computer-nopass.png';
import newspaperImage from '../../assets/Images/homePage/newspapr.png';
import telephoneImage from '../../assets/Images/homePage/telephone.png';

const MainPage = () => {

  let navigate = useNavigate();

  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  }

  return (
    <div className='main-container'>
      <Header isOpen={isOpen} toggle={toggle} />
      {/* smoke effect */}
      <img className='gun' alt='gun' src={GunImage}></img>
      <img className='newspaper' alt='newspaper' src={newspaperImage}></img>
      <img className='computer' alt='computer' src={computerImage}></img>
      <img className='ash-tray' alt='ash tray' src={ashTrayImage}></img>
      <img className='telephone' alt='telephone' src={telephoneImage}></img>
      <img className='cat' alt='cat' src={catImage}></img>

      <img className='cigratte-smoke' alt='smoke' src={smoke} />
      <img className='cigratte-smoke' alt='smoke' src={smoke} />
      {/* <img className='cigratte-smoke' src={smoke} /> */}
      <div className='firepit'>
        <div className='fire'>
          <div className='spark'></div>
          <div className='spark'></div>
          <div className='spark'></div>
          <div className='spark'></div>
          <div className='spark'></div>
          <div className='spark'></div>
        </div>
      </div>
      <button className='enter-btn cursor-pointer' onClick={() => navigate("/levels")} >Enter</button>
    
    </div>
  )
}

export default MainPage