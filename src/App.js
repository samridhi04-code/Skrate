import React, { useEffect, useState } from 'react';
import Home from "./Mycomponents/Home";
import Dashboard from "./Mycomponents/Dashboard";
import {
  Redirect,
  Route,
  Switch
} from "react-router-dom";

function App() {
    
  return (
   <>
    <Switch>
      <Route path="/" exact component={() => <Home />} />
      <Route path="/item1" exact component={() => <Dashboard /> } />
      <Redirect to="/" />
    </Switch>
   </>
  );
}

export default App;
