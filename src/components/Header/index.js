import React, { useState } from 'react';
import './Header.scss';
import Modal from '../Common/Modal';
import ShylockLogo from '../../assets/Images/shylock-logo.png';
import MetamaskLogo from '../../assets/Images/MetaMask.png';
import TwitterLogo from '../../assets/Images/twitter.png';

const Header = ({ isOpen, toggle }) => {

    const [metaKey, setMetaKey] = useState("");

    const handleConnectWallet = async () => {
        if (typeof window.ethereum !== "undefined") {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            })
            console.log(accounts[0]);
            setMetaKey(accounts[0]);
        } else {
            console.log("install meta mask");
        }
    }

    return (
        <div className='header-container d-flex justify-content-between align-items-center'>
            <img className='shylock-logo' src={ShylockLogo} alt="shylock-logo" />

            <div className="center">
                <button onClick={toggle} className="fancy">
                    <span className="top-key"></span>
                    <span className="connect-btn">{metaKey ? metaKey.slice(0, 5) + "..." + metaKey.slice(-5) : "Connect"}</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </button>
            </div>
            <Modal
                isOpen={isOpen}
                toggle={toggle}
                size="md"
                headTitle="LOGIN TO PREMINT"
            >
                <div className='btn-container'>
                    <button className='connect-wallet-btn' onClick={handleConnectWallet}>
                        <img className='btn-logo' src={MetamaskLogo} alt="metamask logo" />  
                        Connect to Metamask wallet
                    </button>
                 
                    <button className='connect-twitter-btn'>
                        <img className='btn-logo' src={TwitterLogo} alt="twitter logo" />
                        Log in with twitter
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default Header