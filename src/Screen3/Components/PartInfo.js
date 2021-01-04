import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PartInfo = () => {
  return(
    <Card className="h-100">
    <Card.Body className="p-2">
      <Card.Title>
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
              <Card.Img variant="bottom" src="https://pixnio.com/free-images/2018/11/27/2018-11-27-15-42-14-1200x786.jpg" />
            </div>
          </Col>
        </Row>

      </Card.Text>
    </Card.Body>
  </Card>
  );
};

export default PartInfo;