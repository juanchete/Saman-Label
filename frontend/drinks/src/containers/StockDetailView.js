import React from 'react';
import axios from 'axios';
import {Card} from 'antd';
import FormStock from '../components/FormStock';

class StockDetail extends React.Component {

    state = {
        stock: {},
        productos: []
    }

    componentDidMount(){
        const stockID = this.props.match.params.stockID;
        console.log(stockID)
        Promise.all([
        axios.get(`http://127.0.0.1:8000/api/stock/${stockID}/`),
        axios.get('http://127.0.0.1:8000/api/productos/')
        ]).then(([stock1,productos1])=>{
            this.setState({
                stock: stock1.data,
                productos: productos1.data
            })
        })};
       
    
        
    render(){

        return(
    <div>
    <Card title={this.state.stock.serializador}>
        <p>Vendidos: {this.state.stock.sold}</p>
        <p>En Stock: {this.state.stock.buy}</p>
    </Card>
    <br></br>
    <h1>Actualizar Stock</h1>
    <br></br>
    <FormStock 
    requestType="put"
    stockID={this.props.match.params.stockID}
    btnText="Update"
    dataProductos={this.state.productos}
    dataStock={this.state.stock}/>
    </div>
        )
    }
}

export default StockDetail;