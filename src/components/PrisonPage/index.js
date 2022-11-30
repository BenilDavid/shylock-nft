import React from 'react'
import './Prison.scss';
import PrisonBgImage from '../../assets/Images/prisonPage/prison-bg.svg';
// import BedImage from '../../assets/Images/prisonPage/bed.png';
// import BloodImage from '../../assets/Images/prisonPage/blood.png';
// import RopeImage from '../../assets/Images/prisonPage/hanging-rope.png';
// import LightImage from '../../assets/Images/prisonPage/light.png';
// import OutlineImage from '../../assets/Images/prisonPage/outline.png';
// import ToiletImage from '../../assets/Images/prisonPage/toilet.png';
// import WaterImage from '../../assets/Images/prisonPage/water.png';
// import WindowImage from '../../assets/Images/prisonPage/window.png';

const PrisonPage = () => {
  return (
    <div className='prison-main'>
      <img className='prison-bg-image' src={PrisonBgImage} alt="prison bg" />
      {/* <img className='bed' src={BedImage} alt="bed" />
      <img className='BloodImage' src={BloodImage} alt="BloodImage" />
      <img className='RopeImage' src={RopeImage} alt="RopeImage" />
      <img className='LightImage' src={LightImage} alt="LightImage" />
      <img className='OutlineImage' src={OutlineImage} alt="OutlineImage" />
      <img className='ToiletImage' src={ToiletImage} alt="ToiletImage" />
      <img className='WaterImage' src={WaterImage} alt="WaterImage" />
      <img className='WindowImage' src={WindowImage} alt="WindowImage" /> */}
    </div>
  )
}

export default PrisonPage