import DropdownsContainer from './Containers/DropdownsContainer';
import TableContainer from './Containers/TableContainer';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { data } from './data';

function App() {
  return (
    <>
      <div className="p-3">
        <DropdownsContainer />
      </div>
      <div className="p-3">
        <TableContainer />
      </div>
    </>
  );
}

export default App;
