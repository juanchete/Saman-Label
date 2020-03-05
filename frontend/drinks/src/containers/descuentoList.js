import React from 'react'
import Descuento from '../components/Descuento'
import axios from 'axios'
import FormDescuento from '../components/FormDescuento'

class descuentoList extends React.Component{
    state = {
        descuento: []
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/descuento/')
        .then(res =>{
            this.setState({
                descuento: res.data
            });
            console.log(res.data);
        })
        
    }
    render(){
        console.log(this.state.descuento)
        return(
    <div>
    <Descuento data={this.state.descuento.filter(function(item){
        return item.available==true;
    })} link="descuento"/>
    <br></br>
    <h2>Registrar Descuento</h2>
    {<FormDescuento
    requestType="post"
    clienteID={null}
    title1="Ingrese nombre del descuentos"
    title2="Ingrese el porcentaje de descuento"
    dato1="tipoDescuento"
    btnText="Create"/> }
    </div>
        )
    }
}
export default descuentoList