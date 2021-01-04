import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import RiskBar from './RiskBar';

const PredictedRisk = () => {
  return(
    <Card className="h-100">
      <Card.Body className="p-2">
        <Card.Title>
          Predicted Risk
        </Card.Title>
        <Card.Text>
          <Table>
            <tbody>
              <tr>
                <th style={{ border: 'none' }} className="font-small small-padding">
                  Design error
                </th>
                <td style={{ border: 'none' }} className="font-small small-padding">
                  <RiskBar dataPoint={80} />
                </td>
              </tr>
              <tr>
                <th className="font-small small-padding">
                  Other avoidable revision
                </th>
                <td className="font-small small-padding">
                  <RiskBar dataPoint={20} />
                </td>
              </tr>
              <tr>
                <th className="font-small small-padding">
                  Delayed design completion
                </th>
                <td className="font-small small-padding">
                  <RiskBar dataPoint={5} />
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