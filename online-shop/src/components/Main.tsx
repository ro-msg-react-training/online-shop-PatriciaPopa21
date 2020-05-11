import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import ProductsTable from './ProductsListComponent';
import { ProductDetails } from './ProductDetailsComponent';

const Main = () => (
  <main>
    <Switch>
      <Route path="/todo" component={Home} />
      <Route path='/products/:id' component={ProductDetails} />
      <Route>
        <Route exact path="/products" component={ProductsTable} />
        <Redirect exact from="/" to="/products" />
      </Route>
      <Route exact path='/products' component={ProductsTable} />
    </Switch>
  </main>
)

export default Main
