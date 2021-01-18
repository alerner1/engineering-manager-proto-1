import React from 'react';
import DropdownsContainer4 from './DropdownsContainer4';
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
        hi
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