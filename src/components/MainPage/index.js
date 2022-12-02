import React, { useEffect } from "react";
import "./MainPage.scss";
import { useNavigate } from "react-router-dom";
// import shylockBg from "../../assets/Images/homePage/main-bg.jpg";

const MainPage = () => {
  let navigate = useNavigate();

  // const [zoomIn, setzoomIn] = useState(false);
  // const [loader, setLoader] = useState(true);

  useEffect(() => {
    //  setTimeout(() => {
    //   setLoader(false);
    //  }, 2000);
  }, []);

  const handleEnterComputer = () => {
    // setzoomIn(true);
      navigate("/levels");
  };

  return (
    <>
      {/* <Loader loader={loader} /> */}
      <div className="main-container">
        {/* <img className="shylock-bg-image" src={shylockBg} alt="background" /> */}
        <button
          className="enter-btn cursor-pointer"
          onClick={handleEnterComputer}
        >
          Enter
        </button>
      </div>
    </>
  );
};

export default MainPage;
