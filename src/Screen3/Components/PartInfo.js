import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import partcadimg from '../../partcadimg.png';

const PartInfo = () => {
  return(
    <Card className="mb-2 border-blue">
    <Card.Body className="p-2">
      <Card.Title className="text-blue">
        Part #212
      </Card.Title>
      <Card.Text>
        <Row>
          <Col>
            <Table>
              <tbody>
                <tr>
                  <th style={{ border: 'none' }} className="font-small small-padding">
                    Part name
                  </th>
                  <td style={{ border: 'none' }} className="font-small small-padding">
                    Engine
                  </td>
                </tr>
                <tr>
                  <th className="font-small small-padding">
                    Design owner
                  </th>
                  <td className="font-small small-padding">
                    Xaviar J.
                  </td>
                </tr>
                <tr>
                  <th className="font-small small-padding">
                    Part criticality
                  </th>
                  <td className="font-small small-padding">
                    High
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col>
            <div className="text-center">
              <Card.Img variant="bottom" src={partcadimg} />
            </div>
          </Col>
        </Row>

      </Card.Text>
    </Card.Body>
  </Card>
  );
};

export default PartInfo;