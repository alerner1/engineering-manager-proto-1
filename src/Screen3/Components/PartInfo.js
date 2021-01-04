import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const PartInfo = () => {
  return(
    <Card style={{width: '18rem'}}>
    <Card.Body>
      <Card.Title>
        Part #212
      </Card.Title>
      <Card.Text>
        <Table>
          <tbody>
            <tr>
              <th className="font-small small-padding">
                Part name
              </th>
              <td className="font-small small-padding">
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
      </Card.Text>
      <Card.Img variant="bottom" src="https://pixnio.com/free-images/2018/11/27/2018-11-27-15-42-14-1200x786.jpg" />
    </Card.Body>
  </Card>
  );
};

export default PartInfo;