import React from 'react'
import FormClientes from '../components/FormClientes'
import axios from 'axios'
import {Card} from "antd"

class ClienteDetail extends React.Component{
    state = {
        cliente: {}
    }

    
    componentDidMount(){
        const clienteID = this.props.match.params.clienteID;
        axios.get(`http://127.0.0.1:8000/api/clientes/${clienteID}/`)
        .then(res =>{
            this.setState({
                cliente: res.data
            });
        })
        
    }
    
    render(){
        return(
            <div>
            <Card title={this.state.cliente.name}>
                <p>{this.state.cliente.last_name}</p>
                <p>{this.state.cliente.cedula}</p>
            </Card>
            <FormClientes 
            requestType="put"
            clienteID={this.props.match.params.clienteID}
            djangoModel="Clientes"
            btnText="Update"/>
            </div>
        )
    }
}





export default ClienteDetail;