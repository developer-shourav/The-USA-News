import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    
    const {id} = useParams();
    const newsInCategory = useLoaderData();

    const [categoryName, setCategoryName] = useState('');

    useEffect( () => {
        fetch('http://localhost:5000/catagories')
        .then( res => res.json())
        .then ( data => {
           const topic = data.find( cate => cate.id == id);
           setCategoryName(topic.name)
        })
    },[id])
    
    return (
        <div>
            { id ? <h3>{categoryName} : {newsInCategory.length}</h3> : <h3> The USA News Home</h3>}
            {
                newsInCategory.map( news => <NewsCard
                 key={news?._id}
                 news={news}
                > </NewsCard>)
            }
        </div>
    );
};

export default Category;

