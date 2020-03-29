import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <Router>
      <div>
      <Header></Header>

      <Switch>
        <Route path= "/shop">
        <Shop></Shop>
        </Route>

        <Route path="/order">
          <Review></Review>
        </Route>

        <Route path="/manage">
          <Inventory></Inventory>
        </Route>

        <Route exact path="/">
          <Shop></Shop>
        </Route>

        <Route path="/product/:productKey">
          <ProductDetail></ProductDetail>
        </Route>

        <Route path="*">
          <h1>This page is not found</h1>
          <h1>Error: 404!!</h1>
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
