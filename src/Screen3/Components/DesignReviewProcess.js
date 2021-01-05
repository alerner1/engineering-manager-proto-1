import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from 'react-bootstrap/ListGroup';
import DesignReviewChart from './DesignReviewChart';

const DesignReviewProcess = () => {
  return(
    <Card className="h-100">
      <Card.Body className="p-2">
        <Card.Title>
          Design and review process
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