import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.scss";
import App from "./App";
import './assets/Style/colors.scss';
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "animate.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainPage from './components/MainPage';
// import LevelsPage from './components/LevelsPage';
// import PrisonGatePage from './components/PrisonGatePage';
// import PrisonPage from './components/PrisonPage';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="shylock-nft.us.auth0.com"
    clientId="YOtPlcWcxirREyQGHjo0KOf2yxk1Urxk"
    redirectUri={window.location.origin}
  >
    <App />
    {/* <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/levels" element={<LevelsPage />} />
            <Route exact path="/prison-gate" element={<PrisonGatePage />} />
            <Route exact path="/prison" element={<PrisonPage />} />
          </Routes>
        </BrowserRouter> */}
  </Auth0Provider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
