import React, { useState, Fragment } from 'react'
import './App.css';
import Header from './Components/Headers/Header1';
import Body from './Components/Body/Body';
import CartDetails from './Components/CartDetails/CartDetails';
import Login from './Components/Login/Login';
import Bag from './Components/Bag/Bag';
import { Route } from 'react-router-dom';


function App() {
  const [routeBag] = useState('/bag');
  const [routeHome] = useState('/');
  const [routeDetails] = useState('/details');

  return (
    <div className="App">
      <Header />
      {routeBag ? (
        <Route exact path={routeBag}>
          <Bag data-aos="fade-left" />
        </Route>
      ) : (<h1> 404 Page Not Found</h1>)}

      {routeHome ? (
        <Fragment>
          <Route exact path={routeHome}>
            <Body data-aos="fade-left" />
          </Route>
        </Fragment>
      ) : (<h1>404 Page Not Found</h1>)}

      {routeDetails ? (
        <Fragment>
          <Route exact path={routeDetails}>
            <CartDetails />
          </Route>
        </Fragment>
      ) : (<h1>404 Page Not Found</h1>)}

      <Route exact path='/Login'>
        <Login />
      </Route>
    </div>
  );
}

export default App;
