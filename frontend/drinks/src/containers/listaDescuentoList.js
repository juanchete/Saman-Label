import React from 'react';
import ListDescuento from '../components/listaDescuento'
import axios from 'axios';
import FormListaDescuento from '../components/FormListaDescuento';

class ListaDescuentoList extends React.Component {

    state = {
         listaDescuento: [],
         productos: []
     }

        componentDidMount(){
            // Promise.all([
            //     axios.get('http://127.0.0.1:8000/api/listaDescuento/'),
            //     axios.get('http://127.0.0.1:8000/api/productos/')
            //   ]).then(([listaDescuento1, productos1]) => {
            //     // do something with both responses
            //     this.setState({
            //         listaDescuento: listaDescuento1.data,
            //         productos: productos1.data
            //     })
            //   })};
              

        axios.get('http://127.0.0.1:8000/api/productos/')
        .then(res =>{
            this.setState({
                productos: res.data
            });
            console.log(res.data);
        })
        axios.get('http://127.0.0.1:8000/api/listaDescuento/')
        .then(res =>{
            this.setState({
                listaDescuento: res.data
            });
            console.log(res.data);
        })
        
     }            
    render(){
    console.log(this.state.productos)
        return(
    <div>
    <ListDescuento data={this.state.productos} link="listaDescuento"/>
    <br></br>
    <h2>Crear descuento particular</h2>
    <FormListaDescuento
    requestType="post"
    listaDescuentoID={null}
    btnText="Create"
    title1="Elige el producto para agregarle descuento particular"
    title2="Ingrese el porcentaje del descuento"
    dataProductos={this.state.productos}/>
    </div>
        )
    }
}

export default ListaDescuentoList;