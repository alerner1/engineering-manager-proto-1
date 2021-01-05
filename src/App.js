import Screen1Container from './Screen1/Containers/Screen1Container';
import Screen2Container from './Screen2/Containers/Screen2Container';
import Screen3Container from './Screen3/Containers/Screen3Container';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle, faMinusCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

library.add(faPlusCircle, faMinusCircle, faExclamationTriangle)

const App = () => {

  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
      <div className="d-flex" style={{height: '100vh'}}>
      <ProSidebar className="h-100 d-inline-block" collapsed={!showSidebar}>
        <Button onClick={() => toggleSidebar()}>toggle</Button>
        <Menu iconShape="square">
          <SubMenu title="Analytics">
            <MenuItem>Dashboards & KPIs</MenuItem>
            <MenuItem>Trends & performance tracking</MenuItem>
            <MenuItem>Drivers of errors & process recommendations</MenuItem>
            <MenuItem>Upcoming critical tasks</MenuItem>
            <MenuItem>Predictions</MenuItem>
          </SubMenu>
          <SubMenu title="Automation">
            <MenuItem>Alerts</MenuItem>
            <MenuItem>Workflows</MenuItem>
          </SubMenu>
          <SubMenu title="Customize">
            <MenuItem>Application settings</MenuItem>
            <MenuItem>Users & accounts</MenuItem>
            <MenuItem>Analytics</MenuItem>
            <MenuItem>Automation</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      
      <Switch>
        <Route path="/subdivisions/:name" children={<Screen2Container />} />
        <Route path="/parts" children={<Screen3Container />} />
        <Route path="/" render={() => <Screen1Container />} />
      </Switch>
      </div>
  );
}

export default App;
