import React from 'react'
import axios from 'axios'
import { Card } from "antd"
import FormTarjetas from '../components/FormTarjetas'

class TarjetaDetail extends React.Component {
    state = {
        tarjeta: {},
        tarjeta1: []
    }


    componentDidMount() {
        const tarjetasID = this.props.match.params.tarjetasID;
    
        axios.get(`http://127.0.0.1:8000/api/tarjetas/${tarjetasID}/`)
            .then(res => {
                this.setState({
                    tarjeta: res.data
                });
            })
            axios.get(`http://127.0.0.1:8000/api/tarjetas/`)
            .then(res => {
                this.setState({
                    tarjeta1: res.data
                });
                
            })

    }

    render() {
        return (
            <div>
                <Card title={this.state.tarjeta.noTarjeta}>
                    <p>BANCO: {this.state.tarjeta.banco}</p>
                    <p>CEDULA: {this.state.tarjeta.cedula}</p>
                    <p>CVV: {this.state.tarjeta.cvv}</p>
                    <p>VENCIMIENTO: {this.state.tarjeta.vencimiento}</p>
                </Card>
                <FormTarjetas
                    requestType="put"
                    // dataTarjetas={this.state.tarjeta}
                    tarjetasID={this.props.match.params.tarjetasID}
                    dataTarjetas={this.state.tarjeta1}
                    btnText="Update"
                    title2="Ingrese nro de cedula"
                    title1="Ingrese nro de la tarjeta"
                    title3="Ingrese el CVV"
                    title4="Ingrese id del recibo"
                    title5="Ingrese el banco "
                    title6="Ingrese la fecha de vencimiento"
                    btnText="Update" />
            </div>
        )
    }
}





export default TarjetaDetail;