import React from 'react'
import './MainPage.scss';
import smoke from '../../assets/Images/smoke-0.png';

const MainPage = () => {
  return (
    <div>
          <div className='image-container'>
            {/* smoke effect */}
        <img className='cigratte-smoke' alt='smoke' src={smoke} />
        <img className='cigratte-smoke' alt='smoke' src={smoke} />
        {/* <img className='cigratte-smoke' src={smoke} /> */}
        <div class='firepit'>
          <div class='fire'>
            <div class='spark'></div>
            <div class='spark'></div>
            <div class='spark'></div>
            <div class='spark'></div>
            <div class='spark'></div>
            <div class='spark'></div>
          </div>
        </div>
          </div>
     

    </div>
  )
}

export default MainPage