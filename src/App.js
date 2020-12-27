import DropdownsContainer from './Containers/DropdownsContainer';
import TableContainer from './Containers/TableContainer';
import { data } from './data';

function App() {
  return (
    <>
      <div className="p-3">
        <DropdownsContainer />
      </div>
      <div className="p-3">
        <TableContainer data={data} />
      </div>
    </>
  );
}

export default App;
