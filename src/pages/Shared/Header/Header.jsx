import React from 'react';
import Logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div>
            <div className="text-center ">
            <img className='img-fluid' src={Logo} alt="" />
            <p className='text-secondary'>Journalism Without Fear or Favour<small></small></p>
            <p>{moment().format("dddd")}, <span className='text-secondary'>{moment().format("MMMM D, YYYY")}</span></p>
            </div>
        </div>
    );
};

export default Header;