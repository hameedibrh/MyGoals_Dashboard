import React from 'react';
import './App.css';

import Login from './components/Login'





import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      
      <h3 className="m-3 d-flex justify-content-center">
      Tread App Trainer Dashboard</h3>
      <h5 className="m-3 d-flex justify-content-center">
      Client Management Portal</h5>


      <Switch>
      <Route path='/' component={Login} exact />
     
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
