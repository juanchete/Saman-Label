import React from 'react';
import axios from 'axios';
import {Card} from 'antd';
import FormListaDescuento from '../components/FormListaDescuento';

class listaDescuentoDetail extends React.Component {

    state = {
        listaDescuento: {},
        productos: {},
        productos1: []
    }

    componentDidMount(){
        
        // Promise.all([
        // axios.get(`http://127.0.0.1:8000/api/nominaDetallada/${nominaID}/`),
        // axios.get('http://127.0.0.1:8000/api/nominaDept/')
        // ]).then(([nomina1,nominaDept1])=>{
        //     this.setState({
        //         nominaDetallada: nomina1.data,
        //         nominaDept: nominaDept1.data
        //     })
        // })};
       const listaDescuentoID = this.props.match.params.listaDescuentoID
       
        axios.get(`http://127.0.0.1:8000/api/listaDescuento/${listaDescuentoID}`)
        .then(res =>{
            this.setState({
                listaDescuento: res.data
            });
            console.log(res.data);
        })
    
    axios.get('http://127.0.0.1:8000/api/productos/')
        .then(res =>{
            this.setState({
                productos1: res.data
            });
            console.log(res.data);
        })
    
    axios.get(`http://127.0.0.1:8000/api/productos/${listaDescuentoID}`)
        .then(res =>{
            this.setState({
                productos: res.data
            });
            console.log(res.data);
        })
    }
   
    render(){
        console.log(this.state.listaDescuento)
        console.log(this.state.productos)
        console.log(this.state.productos1)
        return(
    <div>
    <Card title={"Actualizar descuento particular"}>
        <h1>Del: {this.state.productos.name}</h1>
        <h2>{this.state.listaDescuento.porcentaje+"%"}</h2>
        <p>Posee el serial: {this.state.listaDescuento.serial}</p>

    </Card>
    <br></br>
    <h1>Actualizar descuento particular</h1>
    <br></br>
    <FormListaDescuento 
    requestType="put"
    listaDescuentoID={this.props.match.params.listaDescuentoID}
    btnText="Update"
    dataProductos={this.state.productos1}
    title1="Elige el producto para actualizar descuento particular"
    title2="Ingrese el porcentaje del descuento"/>
    </div>
        )
    }
}

export default listaDescuentoDetail;