import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Build a super team of Web Developers!</h1>
            <h3>Your company is in dire need of recruitment. Start now!</h3>
            <h1>Total Budget: <span id="budget">1 MILLION</span></h1>
        </div>
    );
};

export default Header;