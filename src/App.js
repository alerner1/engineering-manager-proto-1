import Screen1Container from './Screen1/Containers/Screen1Container';
import Screen2Container from './Screen2/Containers/Screen2Container';
import Screen3Container from './Screen3/Containers/Screen3Container';
import React, {useState, useEffect} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPlusCircle, faMinusCircle)

const App = () => {

  return (
    <Switch>
      <Route path="/subdivisions/:name" children={<Screen2Container />} />
      <Route path="/parts" children={<Screen3Container />} />
      <Route path="/" render={() => <Screen1Container />} />
    </Switch>
  );
}

export default App;
