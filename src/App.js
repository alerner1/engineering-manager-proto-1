import Screen1Container from './Screen1/Containers/Screen1Container';
import React, {useState, useEffect} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPlusCircle, faMinusCircle)

const App = () => {

  return (
    <Screen1Container />
  );
}

export default App;
