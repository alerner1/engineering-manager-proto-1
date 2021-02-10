import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import DesignReviewChart from './DesignReviewChart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DesignReviewProcess = () => {
  return(
    <Card className="mb-2 border-blue">
      <Card.Body className="p-2">
        <Card.Title className="text-blue">
          <Row>
            <Col xs={8}>
              Design and review process
            </Col>
          </Row>  
          <Row className="font-xs mt-1" style={{color: 'black'}}>
                <Col>
                  <FontAwesomeIcon style={{color: '#0DAB76'}} icon="circle" /> Approved
                  &nbsp;
                  <FontAwesomeIcon style={{color: '#EFEA5A'}} icon="circle" /> Conditional Approval
                  &nbsp;
                  <FontAwesomeIcon style={{color: '#DF2935'}} icon="circle" /> Not approved
                </Col>
          </Row>
        </Card.Title>
        <Card.Text>
          <DesignReviewChart />
          <Card.Text className="mt-2">
            <h6>Review comment excerpts</h6>
            <ListGroup variant="flush">
              <ListGroup.Item className="ml-2 no-border font-xs small-padding">
                "I'm not sure this part will fit into the thermal requirements"
              </ListGroup.Item>
              <ListGroup.Item className="ml-2 no-border font-xs small-padding">
                "We should set a meeting with the Subject Matter Experts but I'm not sure there's enough time before the deadline"
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DesignReviewProcess;