import React from 'react';
import { Button } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const LatestNewsMarque = () => {
    return (
        <div className="d-flex bg-secondary bg-opacity-25 py-3 px-3">
        <Button className="rounded-0 me-2" variant="danger">
          Latest
        </Button>
        <Marquee className="font-bold  fw-semibold" speed={50} gradient={false}>
         Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    );
};

export default LatestNewsMarque;