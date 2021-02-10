import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RiskAlerts = () => {
  return(
    <Card className="mb-1">
      <Card.Body className="p-2">
        <Card.Title>
          Risk Alerts
        </Card.Title>
        <Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item className="font-small small-padding">
            <FontAwesomeIcon style={{color: 'red'}} className="hover-hand" icon="exclamation-triangle" /> 
            &nbsp;
              Design final iteration was rushed and close to deadline
            </ListGroup.Item>
            <ListGroup.Item className="font-small small-padding">
              <FontAwesomeIcon style={{color: 'red'}} className="hover-hand" icon="exclamation-triangle" /> 
              &nbsp;
              SME review was waived
            </ListGroup.Item>
            <ListGroup.Item className="font-small small-padding">
              <FontAwesomeIcon style={{color: 'red'}} className="hover-hand" icon="exclamation-triangle" /> 
              &nbsp;
              Review comments include "Hesitations", "need more discussion", "upcoming deadline"
            </ListGroup.Item>
            <ListGroup.Item className="font-small small-padding">
              <FontAwesomeIcon style={{color: 'red'}} className="hover-hand" icon="exclamation-triangle" /> 
              &nbsp;
              Design owner was junior and new to department
            </ListGroup.Item>
            <ListGroup.Item className="font-small small-padding">
              <FontAwesomeIcon style={{color: 'red'}} className="hover-hand" icon="exclamation-triangle" /> 
              &nbsp;
              No senior manager approved
            </ListGroup.Item>
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RiskAlerts;