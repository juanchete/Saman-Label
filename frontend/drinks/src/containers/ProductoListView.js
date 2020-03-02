import React from 'react';
import Productos from '../components/Productos'
import axios from 'axios';
import CustomForm from '../components/Form'

class ProductList extends React.Component {

    state = {
         productos: [],
         categorias: []
     }

        componentDidMount(){
            Promise.all([
                axios.get('http://127.0.0.1:8000/api/productos/'),
                axios.get('http://127.0.0.1:8000/api/categorias/')
              ]).then(([productos1, categorias1]) => {
                // do something with both responses
                this.setState({
                    productos: productos1.data,
                    categorias: categorias1.data
                })
              })};
    //     axios.get('http://127.0.0.1:8000/api/productos/')
    //     .then(res =>{
    //         this.setState({
    //             productos: res.data
    //         });
    //         console.log(res.data);
    //     })
        
    //  }


    render(){
        return(
    <div>
    <Productos data={this.state.productos} link="productos"/>
    <br></br>
    <h2>Crear producto</h2>
    <CustomForm
    requestType="post"
    productoID={null}
    djangoModel="Productos"
    btnText="Create"
    title1="Nombre del producto"
    title2="Ingrese la categoria"
    title3="Ingrese el precio"
    title4="Ingrese el descuento"
    dato1="name"
    dato2="category"
    dato3="price"
    dato4="discount"
    dataProductos={this.state.productos}
    dataCategorias={this.state.categorias}/>
    </div>
        )
    }
}

export default ProductList;