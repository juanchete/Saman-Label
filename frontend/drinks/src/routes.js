import React from 'react';
import {Route} from 'react-router-dom';

import ProductList from './containers/ProductoListView';
import ProductDetail from './containers/ProductoDetailView';
import ClienteList from './containers/ClienteListView';
import ClienteDetail from './containers/ClienteDetailView';
import CarritoView from './containers/CarritoView';
import HomeView from './containers/Home';
import CategoriaList from './containers/CategoriasListView';
import CategoriaDetail from './containers/CategoriasDetailView';
import QueryChillView from './containers/queryChillView';
import QueryRecomendaciones from './containers/QueryRecomendaciones';
import QueryTopProducts from './containers/QueryTopProducts';
import QuerysProductosVendidos from './containers/QuerysProductosVendidos';
import QueryEmpleadoDelMes from './containers/QueryEmpleadoDelMes';
import QueryEmpleadosMejoresPagados from './containers/QueryEmpleadosMejoresPagados';
import QuerysTrabajadoresJuan from './containers/QuerysTrabajadoresJuan';
const BaseRouter = () => (
    <div>
       <Route exact path='/productos' component={ProductList}/>
       <Route exact path='/query-chingon/1' component={QueryChillView}/>
       <Route exact path='/query-chingon/2' component={QueryRecomendaciones}/>
       <Route exact path='/query-chingon/3' component={QueryTopProducts}/>
       <Route exact path='/query-chingon/4' component={QuerysProductosVendidos}/>
       <Route exact path='/query-chingon/5' component={QueryEmpleadoDelMes}/>
       <Route exact path='/query-chingon/6' component={QueryEmpleadosMejoresPagados}/>
       <Route exact path='/query-chingon/7' component={QuerysTrabajadoresJuan}/>
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