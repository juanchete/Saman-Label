import React from 'react';
import {Route} from 'react-router-dom';

import ProductList from './containers/ProductoListView';
import ProductDetail from './containers/ProductoDetailView';
const BaseRouter = () => (
    <div>
       <Route exact path='/' component={ProductList}/> 
       <Route exact path='/:productoID' component={ProductDetail}/> 
    </div>
);

export default BaseRouter;