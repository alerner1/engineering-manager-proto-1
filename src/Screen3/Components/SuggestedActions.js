import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

const SuggestedActions = () => {
  return(
    <Card>
      <Card.Body className="px-2 pt-2 pb-0">
        <Card.Title>
          Suggested Actions
        </Card.Title>
        <Card.Text>
          <Table>
            <tbody>
              <tr>
                <td style={{ border: 'none' }} className="font-small small-padding">
                  <Image className="p-0" style={{height: '5vh'}} fluid src="https://cdn-blob-prd.azureedge.net/prd-pws/images/default-source/default-album/microsoft-teams-logo.png" />
                </td>
                <td style={{ border: 'none' }} className="font-small small-padding">
                  Contact Xavier J.
                </td>
              </tr>
              <tr>
                <td className="font-small small-padding">
                  <Image className="p-0" style={{height: '5vh'}} fluid src="https://images.idgesg.net/images/article/2020/05/1055.outlook-logo-2_thumb_56da2757-100841646-large.jpg" />
                </td>
                <td className="font-small small-padding">
                  Schedule a meeting with reviewers
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SuggestedActions;