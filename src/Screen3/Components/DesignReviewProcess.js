import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from 'react-bootstrap/ListGroup';
import DesignReviewChart from './DesignReviewChart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DesignReviewProcess = () => {
  return(
    <Card className="h-100">
      <Card.Body className="p-2">
        <Card.Title>
          <Row noGutters>
            <Col xs={8}>
              Design and review process
            </Col>
            <Col className="font-xs" style={{color: 'midnightblue'}}>
              <FontAwesomeIcon style={{color: '#DF2935'}} icon="circle" /> Approved
              <br />
              <FontAwesomeIcon style={{color: '#EFEA5A'}} icon="circle" /> Conditional Approval
              <br />
              <FontAwesomeIcon style={{color: '#0DAB76'}} icon="circle" /> Not approved
            </Col>
          </Row>
        </Card.Title>
        <Card.Text>
          <DesignReviewChart />
          <Card.Title>
              Review comment excerpts
          </Card.Title>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item className="font-italic font-small small-padding">
                "I'm not sure this part will fit into the thermal requirements"
              </ListGroup.Item>
              <ListGroup.Item className="font-italic font-small small-padding">
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