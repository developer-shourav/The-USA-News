import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect( () => {
        fetch('https://the-usa-news-server-developer-shourav.vercel.app/catagories')
        .then( res => res.json())
        .then( data => setCategories(data))
    } ,[])

    return (
        <div>
            <h4 className="fw-semibold">All Caterogy</h4>

            <div className="ps-4 py-3 my-2">
                {
                    categories.map( category => <p 
                        key={category.id}> 
                        <NavLink to={`/category/${category.id}`} className= { ({isActive}) => isActive ? 'text-black bg-secondary d-block rounded bg-opacity-25  px-4 py-3 my-1 fw-semibold text-decoration-none' : 'text-secondary rounded px-4 py-3 my-1 fw-semibold text-decoration-none'}   >{category?.name}</NavLink>

                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;
