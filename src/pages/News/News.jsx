import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom'; 
import {HiArrowLeft} from 'react-icons/hi';
import EditorsInSight from './EditorsInSight/EditorsInSight';

const News = () => {
    const news = useLoaderData() ;
    const {
        _id,
        others_info,
        category_id,
        rating,
        total_view,
        title,
        author,
        image_url,
        details,
      } = news;
    return (
        <>
            <Card >
            <Card.Img className='p-3' variant="top" src={image_url} />
            <Card.Body>
                <Card.Title style= {{color:"#403F3F"}} className=' fw-semibold'>{title}</Card.Title>
                <Card.Text style= {{color:"#706F6F"}}>
                {details}
                </Card.Text>
                <Link to={`/category/${category_id}`} className='text-decoration-none'> <Button style={{backgroundColor:'#D72050'}} className='rounded-0 border-0 px-4 d-flex align-items-center gap-1' variant="primary"> <HiArrowLeft/> <span>All news in this category </span></Button></Link>
            </Card.Body>
        </Card>

        <div className='my-4'>
        <h4 className=' fw-semibold'>Editors Insight</h4>
        <EditorsInSight></EditorsInSight>
        </div>
        </>
    );
};

export default News;