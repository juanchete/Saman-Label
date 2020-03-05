import React from 'react';
import {Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import ProductList from './containers/ProductoListView';
import ProductDetail from './containers/ProductoDetailView';
import ClienteList from './containers/ClienteListView';
import ClienteDetail from './containers/ClienteDetailView';
import CarritoView from './containers/CarritoView';
import HomeView from './containers/Home';
import CategoriaList from './containers/CategoriasListView';
import CategoriaDetail from './containers/CategoriasDetailView';
import StockList from './containers/StockListView';
import StockDetail from './containers/StockDetailView';
import NominaDeptList from './containers/NominaDeptList';
import NominaDeptDetail from './containers/NominaDeptDetail';
import NominaList from "./containers/nominaList";
import nominaDetail from "./containers/nominaDetail";
import descuentoList from "./containers/descuentoList";
import descuentoDetail from "./containers/descuentoDetail";
import listaDescuentoList from "./containers/listaDescuentoList";
import listaDescuentoDetail from "./containers/listaDescuentoDetail";
import TarjetasList from './containers/TarjetaList';
import TarjetaDetail from './containers/TarjetaDetail';
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
       <Route exact path='/stock' component={StockList}/>
       <Route exact path='/stock/:stockID' component={StockDetail}/>
       <Route exact path='/nominaDept' component={NominaDeptList}/>
       <Route exact path='/nominaDept/:nominaDeptID' component={NominaDeptDetail}/>
       <Route exact path='/nominaDetallada' component={NominaList}/>
       <Route exact path='/nominaDetallada/:nominaDetalladaID' component={nominaDetail}/>
       <Route exact path='/descuento' component={descuentoList}/>
       <Route exact path='/descuento/:descuentoID' component={descuentoDetail}/>
       <Route exact path='/listaDescuento' component={listaDescuentoList}/>
       <Route exact path='/listaDescuento/:listaDescuentoID' component={listaDescuentoDetail}/>
       <Route exact path='/tarjetas' component={TarjetasList}/>
       <Route exact path='/tarjetas/:tarjetasID' component={TarjetaDetail}/>
       {/* <Route render={() => <Redirect to={{pathname: "/home"}} />} /> */}
    </div>
);

export default BaseRouter;