import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
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
        <div className='logo'>Logo</div>
        {/* <div>Connect wallet</div> */}
          <div class="center">
              <button onClick={handleConnectWallet} class="fancy">
                  <span class="top-key"></span>
                  <a class="">Connect wallet</a>
                  <span class="bottom-key-1"></span>
                  <span class="bottom-key-2"></span>
              </button>
          </div>
    </div>
  )
}

export default Header