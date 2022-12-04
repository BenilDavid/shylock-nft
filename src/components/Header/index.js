import React, { useState } from "react";
import "./Header.scss";
import "./validation.scss";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../Common/Modal";
import ShylockLogo from "../../assets/Images/shylock-logo.png";
import MetamaskLogo from "../../assets/Images/MetaMask.png";
import TwitterLogo from "../../assets/Images/twitter.png";
// import { useNavigate } from "react-router-dom";

const Header = ({ isOpen, toggle }) => {
    // const navigate = useNavigate();

    const { user, loginWithRedirect, logout } = useAuth0();

    const [metaKey, setMetaKey] = useState("");

    const handleConnectWallet = async () => {
        if (typeof window.ethereum !== "undefined") {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            console.log(accounts[0]);
            setMetaKey(accounts[0]);
        } else {
            console.log("install meta mask");
        }
    };

    return (
        <div className="header-container">
            <div className=" d-flex justify-content-between align-items-center">
                <img className="shylock-logo cursor-pointer" src={ShylockLogo} alt="shylock-logo" />
                {/* <div class="glitch" data-glitch="glitch">glitch</div> */}
                <button onClick={toggle} className="enter-btn glitch distortText" data-glitch="glitch">
                    {metaKey
                        ? metaKey.slice(0, 5) + "..." + metaKey.slice(-5)
                        : "Connect"}
                </button>
            </div>

            <Modal
                isOpen={isOpen}
                toggle={toggle}
                size="md"
                headTitle="LOGIN TO PREMINT"
            >
                <div className="btn-container row">
                    <div className="col">
                        <button className="connect-wallet-btn" onClick={handleConnectWallet}>
                            <img className="btn-logo" src={MetamaskLogo} alt="metamask logo" />
                            Connect to Metamask wallet
                            {metaKey ?
                                <>
                                    <div className="correct-circle">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                            <circle className="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                                            <polyline className="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                                        </svg>
                                    </div>
                                </> :
                                <>
                                    <div className="wrong-circle">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                            <circle className="path circle" fill="none" stroke="#D06079" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                                            <line className="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3" />
                                            <line className="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2" />
                                        </svg>
                                    </div>
                                </>}
                        </button>

                        <button
                            className="connect-twitter-btn"
                            onClick={!user ? () => loginWithRedirect() : () => logout({ returnTo: window.location.origin })}
                        >
                            <img className="btn-logo" src={TwitterLogo} alt="twitter logo" />
                            {!user ? "Log in with twitter" : "Log Out"}
                            {user ?
                                <>
                                    <div className="correct-circle">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                            <circle className="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                                            <polyline className="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                                        </svg>
                                    </div>
                                </> :
                                <>
                                    <div className="wrong-circle">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                            <circle className="path circle" fill="none" stroke="#D06079" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                                            <line className="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3" />
                                            <line className="path line" fill="none" stroke="#D06079" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2" />
                                        </svg>
                                    </div>
                                </>}
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Header;
