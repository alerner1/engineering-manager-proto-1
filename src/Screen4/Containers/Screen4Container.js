import React from 'react';
import DropdownsContainer4 from './DropdownsContainer4';
import TableContainer4 from './TableContainer4';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Screen4Container = () => {
  // this width thing is completely absolutely essential but also totally messed up
  // fix it so it's responsive and looks good in more than just screenshots

  return(
    <Row  style={{width: '75vw'}}>
      <Col xs={12}>
        <div className="pt-2 px-3 d-block mx-auto w-100">
          <DropdownsContainer4 />
        </div>
        <div className="pt-2 px-3 d-block mx-auto w-100">
          <TableContainer4 />
        </div>
      </Col>
    </Row>
  )
};

export default Screen4Container;
// so here we have screen 4
// if we're given a division, just display all parts for entire division
// if subdivision, display for only that subdivision
// otherwise it's weird because default screen doesn't have the links to screen 4
// since subdivs aren't displayed by default

// [product line dropdown] [severity dropdown] [time frame (dropdown? not sure what this is exactly)]

// table
// part | risk alerts (#) | blockers (#? str?) | process deviations (#)

// ok we can easily generate this data right?

// when you click on a subdivision
// show 50 parts. 
// first 10 assigned to product line 1, next to product line 2, and so on
// each with risk alerts and blockers and process devs set to a random number between 1 and 30. 

// when you click on a division
// show 150 parts (or # of subdivisions * 50)
// 50 per subdivision


// you know what's REALLY missing from this screen? you have no idea where you are.
// you need to show which subdivision you're looking at or whatever.



// anyway... for now. for tomorrow. all we need is one lousy screen to share. clicking doesn't even have to work.