import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const RiskAlerts = () => {
  return(
    <Card style={{width: '25rem'}}>
      <Card.Body className="p-3">
        <Card.Title>
          Risk Alerts
        </Card.Title>
        <Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item className="font-small small-padding">
              Design final iteration was rushed and close to deadline
            </ListGroup.Item>
            <ListGroup.Item className="font-small small-padding">
              SME review was waived
            </ListGroup.Item>
            <ListGroup.Item className="font-small small-padding">
              Review comments include "Hesitations", "need more discussion", "upcoming deadline"
            </ListGroup.Item>
            <ListGroup.Item className="font-small small-padding">
              Design owner was junior and new to department
            </ListGroup.Item>
            <ListGroup.Item className="font-small small-padding">
              No senior manager approved
            </ListGroup.Item>
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RiskAlerts;