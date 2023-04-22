import React, { useEffect, useState } from 'react';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/catagories')
        .then( res => res.json())
        .then( data => setCatagories(data))
    } ,[])

    console.log(catagories);
    return (
        <div>
            <h2>This is left Navbar</h2>
        </div>
    );
};

export default LeftNav;