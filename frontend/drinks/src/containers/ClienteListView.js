import React from 'react'
import Productos from '../components/Productos'
import axios from 'axios'
import FormClientes from '../components/FormClientes'

class ClienteList extends React.Component {
    
    state = {
        clientes: []
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/clientes/')
        .then(res =>{
            this.setState({
                clientes: res.data
            });
            console.log(res.data);
        })
        
    }

    render(){
        return(
    <div>
    <Productos data={this.state.clientes} link="clientes"/>
    <br></br>
    <h2>Registrar Cliente</h2>
    {<FormClientes
    requestType="post"
    clienteID={null}
    djangoModel="Clientes"
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
    dataClientes={this.state.clientes}
    btnText="Create"/> }
    </div>
        )
    }
}
export default ClienteList;