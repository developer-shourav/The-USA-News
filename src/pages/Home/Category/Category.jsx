import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    
    const {id} = useParams();
    const newsInCategory = useLoaderData();
    return (
        <div>
            <h2>This  Category News : {newsInCategory.length}</h2>
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