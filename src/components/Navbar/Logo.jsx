import React from 'react';
import logo from '../../images/logo.png';

const Logo = () => {
    return (
        <a className="href" href="/">
            <img src={logo} alt="Logo" />
        </a>
    );
};

export default Logo;
