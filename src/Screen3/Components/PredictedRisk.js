import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';

const PredictedRisk = () => {
  return(
    <Card className="p-3">
      <Card.Body>
        <Card.Title>
          Predicted Risk
        </Card.Title>
        <Card.Text>
          <Table>
            <tbody>
              <tr>
                <th className="font-small small-padding">
                  Design error
                </th>
                <td className="font-small small-padding">
                  <ProgressBar now={80} />
                </td>
              </tr>
              <tr>
                <th className="font-small small-padding">
                  Other avoidable revision
                </th>
                <td className="font-small small-padding">
                  <ProgressBar now={20} />
                </td>
              </tr>
              <tr>
                <th className="font-small small-padding">
                  Delayed design completion
                </th>
                <td className="font-small small-padding">
                  <ProgressBar now={5} />
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PredictedRisk;