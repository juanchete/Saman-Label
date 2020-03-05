import React from 'react'
import FormClientes from '../components/FormClientes'
import axios from 'axios'
import { Card } from "antd"

class ClienteDetail extends React.Component {
    state = {
        cliente: {}
    }


    componentDidMount() {
        const clienteID = this.props.match.params.clienteID;
        console.log(clienteID)
        axios.get(`http://127.0.0.1:8000/api/clientes/${clienteID}/`)
            .then(res => {
                this.setState({
                    cliente: res.data
                });
            })

    }

    render() {
        return (
            <div>
                <Card title={this.state.cliente.name}>
                    <p>{this.state.cliente.last_name}</p>
                    <p>{this.state.cliente.cedula}</p>
                </Card>
                <FormClientes
                    requestType="put"
                    clienteID={this.props.match.params.clienteID}
                    dataClientes={this.state.cliente}
                    title1="Ingrese nombre del cliente"
                    title2="Ingrese el apellido"
                    title3="Ingrese el telefono"
                    title4="Ingrese el cumpleaños"
                    dato1="name"
                    dato2="last_name"
                    dato3="telephone"
                    dato4="birthday"
                    title5="Ingrese cedula"
                    dato5="cedula"
                    title6="Ingresa la direccion del cliente"
                    dato6="direction"
                    btnText="Update" />
            </div>
        )
    }
}





export default ClienteDetail;