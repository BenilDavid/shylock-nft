import React, {useState} from 'react'
import './MainPage.scss';
import smoke from '../../assets/Images/smoke-0.png';
import { useNavigate } from "react-router-dom";
import Header from '../Header';

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
      <button className='enter-btn cursor-pointer' onClick={() => navigate("/levels")} >ENTER</button>
    
    </div>
  )
}

export default MainPage