import React from 'react';
import Logo from '../../../assets/logo.png';

const Header = () => {
    return (
        <div>
            <img src={Logo} alt="" />
            <p className='text-secondary'>Journalism Without Fear or Favour<small></small></p>
        </div>
    );
};

export default Header;