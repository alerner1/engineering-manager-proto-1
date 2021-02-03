import Screen1Container from './Screen1/Containers/Screen1Container';
import Screen2Container from './Screen2/Containers/Screen2Container';
import Screen3Container from './Screen3/Containers/Screen3Container';
import Screen4Container from './Screen4/Containers/Screen4Container';
import TrendsPageContainer from './TrendsPage/Containers/TrendsPageContainer'
import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle, faMinusCircle, faExclamationTriangle, faCircle, faBars, faAtom, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPlusCircle, faMinusCircle, faExclamationTriangle, faCircle, faBars, faAtom, faLayerGroup)

const App = () => {

  const [showSidebar, setShowSidebar] = useState(true);

  let history = useHistory();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  // const handleNav = (event) => {
  //   console.log(event.target)
  //   switch(event.target.id) {
  //     case "dashboard":
  //       history.push('/');
  //       break;
  //     case "trends":
  //       history.push('/trends')
  //     default:
  //       history.push('/');
  //       break;
  //   }
  // }

  return (
      <div className="d-flex">
        <div >
          <div className="sticky-top" style={{height: '100vh', backgroundColor: 'whitesmoke'}}>
            <Button className="shadow-none button-transparent" onClick={() => toggleSidebar()}>
              <FontAwesomeIcon style={{color: 'midnightblue'}} icon="bars" /> 
            </Button>
            <ProSidebar collapsed={!showSidebar}>
              <Menu>
                <SubMenu title="Analytics" icon={<FontAwesomeIcon style={{color: 'midnightblue'}} icon="atom" />}>
                  <MenuItem>
                    Dashboards & KPIs
                    <Link to="/" />
                  </MenuItem>
                  <MenuItem>
                    Trends & performance <br /> tracking
                    <Link to="/trends" />
                  </MenuItem>
                  <MenuItem>Drivers of errors & <br /> process recommendations</MenuItem>
                  <MenuItem>Predicted Risk</MenuItem>
                </SubMenu>
                <SubMenu title="Automation" icon={<FontAwesomeIcon style={{color: 'midnightblue'}} icon="atom" />}>
                  <MenuItem>Alerts</MenuItem>
                  <MenuItem>Workflows</MenuItem>
                </SubMenu>
                <SubMenu title="Customize" icon={<FontAwesomeIcon style={{color: 'midnightblue'}} icon="atom" />}>
                  <MenuItem>Application settings</MenuItem>
                  <MenuItem>Users & accounts</MenuItem>
                  <MenuItem>Analytics</MenuItem>
                  <MenuItem>Automation</MenuItem>
                </SubMenu>
              </Menu>
            </ProSidebar>
          </div>
        </div>
        <div>
          <Switch>
            <Route path="/subdivisions/:name" children={<Screen2Container />} />
            <Route path="/design_errors/:name" children={<Screen4Container />} />
            <Route path="/parts" children={<Screen3Container />} />
            <Route path="/trends" children={<TrendsPageContainer />} />
            <Route path="/" render={() => <Screen1Container />} />
          </Switch>
        </div>
      </div>
  );
}

export default App;
