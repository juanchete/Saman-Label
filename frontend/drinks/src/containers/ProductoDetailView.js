import React from 'react';
import CustomForm from '../components/Form'
import axios from 'axios';
import {Card} from 'antd';
import Productos from '../components/Productos';

class ProductDetail extends React.Component {

    state = {
        producto: {},
        categorias: [],
        productos: []
    }

    componentDidMount(){
        const productoID = this.props.match.params.productoID;
        Promise.all([
        axios.get(`http://127.0.0.1:8000/api/productos/${productoID}/`),
        axios.get('http://127.0.0.1:8000/api/categorias/'),
        axios.get('http://127.0.0.1:8000/api/productos/')
        ]).then(([productos1, categorias1,productosV])=>{
            this.setState({
                producto: productos1.data,
                categorias: categorias1.data,
                productos: productosV.data
            })
        })};
        
    

    render(){
        return(
    <div>
    <Card title={this.state.producto.name}>
        <p>{this.state.producto.price}</p>
    </Card>
    <CustomForm 
    requestType="put"
    productoID={this.props.match.params.productoID}
    djangoModel="Productos"
    btnText="Update"
    title1="Nombre del producto"
    title2="Ingrese la categoria"
    title3="Ingrese el precio"
    dato1="name"
    dato2="category"
    dato3="price"
    dataProductos={this.state.productos}
    dataCategorias={this.state.categorias}/>
    </div>
        )
    }
}

export default ProductDetail;