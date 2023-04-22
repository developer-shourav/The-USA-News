import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/catagories')
        .then( res => res.json())
        .then( data => setCatagories(data))
    } ,[])

    return (
        <div>
            <h4 className="fw-semibold">All Caterogy</h4>

            <div className="ps-4 py-3 my-2">
                {
                    catagories.map( catagory => <p 
                        key={catagory.id}> 
                        <NavLink to={`/catagory/${catagory.id}`} className='text-decoration-none text-secondary fw-semibold'  >{catagory?.name}</NavLink>

                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;