import React from 'react';
import {Route} from 'react-router-dom';

import ProductList from './containers/ProductoListView';
import ProductDetail from './containers/ProductoDetailView';
import ClienteList from './containers/ClienteListView';
import ClienteDetail from './containers/ClienteDetailView';
import CarritoView from './containers/CarritoView';
import HomeView from './containers/Home';
import CategoriaList from './containers/CategoriasListView';
import CategoriaDetail from './containers/CategoriasDetailView'
const BaseRouter = () => (
    <div>
       <Route exact path='/productos' component={ProductList}/>
       <Route exact path='/clientes' component={ClienteList}/>
       <Route exact path='/clientes/:clienteID' component={ClienteDetail}/>
       <Route exact path='/productos/:productoID' component={ProductDetail}/> 
       <Route exact path='/carrito' component={CarritoView}/>
       <Route exact path='/categorias' component={CategoriaList}/>
       <Route exact path='/categorias/:categoriaID' component={CategoriaDetail}/>
       <Route exact path='/home' component={HomeView}/>
    </div>
);

export default BaseRouter;