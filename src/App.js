import Screen1Container from './Screen1/Containers/Screen1Container';
import Screen2Container from './Screen2/Containers/Screen2Container';
import Screen3Container from './Screen3/Containers/Screen3Container';
import Screen4Container from './Screen4/Containers/Screen4Container';
import TrendsPageContainer from './TrendsPage/Containers/TrendsPageContainer'
import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle, faMinusCircle, faExclamationTriangle, faCircle, faBars, faAtom, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPlusCircle, faMinusCircle, faExclamationTriangle, faCircle, faBars, faAtom, faLayerGroup)

const App = () => {

  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
      <div className="d-flex" style={{height: '100%'}}>
        <ProSidebar collapsed={!showSidebar}>
          <SidebarHeader>
            <Button className="shadow-none button-transparent" onClick={() => toggleSidebar()}>
              <FontAwesomeIcon icon="bars" /> 
            </Button>
          </SidebarHeader>
          <SidebarContent>
          <Menu>
            <SubMenu className="ml-3" title="Analytics" icon={<FontAwesomeIcon icon="atom" />}>
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
            <SubMenu className="ml-3" title="Automation" icon={<FontAwesomeIcon icon="atom" />}>
              <MenuItem>Alerts</MenuItem>
              <MenuItem>Workflows</MenuItem>
            </SubMenu>
            <SubMenu className="ml-3" title="Customize" icon={<FontAwesomeIcon icon="atom" />}>
              <MenuItem>Application settings</MenuItem>
              <MenuItem>Users & accounts</MenuItem>
              <MenuItem>Analytics</MenuItem>
              <MenuItem>Automation</MenuItem>
            </SubMenu>
          </Menu>
          </SidebarContent>
        </ProSidebar>
        <div style={{width: '100%', overflow: 'scroll'}}>
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
