import React from 'react'
import FormDescuento from '../components/FormDescuento'
import axios from 'axios'
import {Card} from "antd"

class descuentoDetail extends React.Component {
    state = {
        descuento: {}
    }
    componentDidMount(){
        const descuentoID = this.props.match.params.descuentoID;
        axios.get(`http://127.0.0.1:8000/api/descuento/${descuentoID}/`)
        .then(res =>{
            this.setState({
                descuento: res.data
            });
        })
        
    }
    
    render(){
        console.log(this.state.descuento.tipoDescuento,this.state.descuento.porcentaje)
        return(
            <div>
            <Card title={this.state.descuento.tipoDescuento}>
            <p>porcentaje: {this.state.descuento.porcentaje}</p>
            </Card>
            <h2>Actualizar descuento</h2>
            <FormDescuento 
            requestType="put"
            title1='Ingresa el nombre del descuento'
            dato1='tipoDescuento'
            tipoDescuento={this.state.descuento.tipoDescuento}
            porcentaje={this.state.descuento.porcentaje}
            title2='Ingresa el porcentaje del descuento'
            descuentoID={this.props.match.params.descuentoID}
            btnText="Update"/>
            </div>
        )
    }
}
export default descuentoDetail