import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

const WorkflowsExecuted = () => {
  return(
    <Card className="h-100">
      <Card.Body className="p-2">
        <Card.Title>
          Workflows Executed
        </Card.Title>
        <Card.Text>
          <Table>
            <tbody>
              <tr>
                <td style={{ border: 'none' }} className="font-small small-padding">
                  <Image className="p-0" style={{height: '5vh'}} fluid src="https://cdn.wccftech.com/wp-content/uploads/2020/09/Gmail.png" /> 
                </td>
                <td style={{ border: 'none' }} className="font-small small-padding">
                  Program manager notified
                </td>
              </tr>
              <tr>
                <td className="font-small small-padding">
                  <Image className="p-0" style={{height: '5vh'}} fluid src="https://logos-download.com/wp-content/uploads/2016/09/Jira_logo-700x272.png" />
                </td>
                <td className="font-small small-padding">
                  Review assigned to Senior SME
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WorkflowsExecuted;