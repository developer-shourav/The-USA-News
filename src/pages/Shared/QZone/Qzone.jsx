import React from 'react';
import QZoneImg1 from '../../../assets/qZone1.png'
import QZoneImg2 from '../../../assets/qZone2.png'
import QZoneImg3 from '../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-secondary bg-opacity-25 text-center py-3 px-2 mt-4'>
            <h4 className="fw-semibold text-start mb-4">
                Q-Zone
            </h4>
            <div>
                <img className='w-100' src={QZoneImg1} alt="" />
                <img className='w-100' src={QZoneImg2} alt="" />
                <img className='w-100' src={QZoneImg3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;