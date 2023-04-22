import React from 'react';
import { Button } from 'react-bootstrap';
import { BsGoogle, BsGithub } from 'react-icons/bs';
const RightNav = () => {
    return (
        <div>
            <h4 className='fw-semibold'>Login With</h4>
            <Button className='w-100 mb-2' variant="outline-primary"> <BsGoogle/> Login with Google</Button>
            <br />
            <Button className='w-100' variant="outline-dark"><BsGithub/> Login with Github</Button>
        </div>
    );
};

export default RightNav;