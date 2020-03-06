import React from 'react';
import Stock from '../components/Stock';
import axios from 'axios';
import FormStock from '../components/FormStock';

class StockList extends React.Component {

    state = {
         stock: [],
         productos: []
     }

        componentDidMount(){
            Promise.all([
                axios.get('http://127.0.0.1:8000/api/productos/'),
                axios.get('http://127.0.0.1:8000/api/stock/')
              ]).then(([productos1, stock1]) => {
                // do something with both responses
                this.setState({
                    productos: productos1.data,
                    stock : stock1.data
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
    <Stock data={this.state.stock} link="stock"/>
    <br></br>
    <h2>Agregar Stock de producto</h2>
    <FormStock
    requestType="post"
    stockID={null}
    btnText="Create"
    dataProductos={this.state.productos}
    dataStock={this.state.stock}
    title1="Cantidad en Stock"
    title2="Cantidad de Vendidos"
    />
    </div>
        )
    }
}

export default StockList;