import React from 'react';
import axios from 'axios';
import {Card} from 'antd';
import FormNomina from '../components/FormNomina';

class nominaDetalle extends React.Component {

    state = {
        nominaDetail: {},
        nominaDept: []
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
       const nominaDetalladaID = this.props.match.params.nominaDetalladaID
        console.log(nominaDetalladaID)
        axios.get(`http://127.0.0.1:8000/api/nominaDetallada/${nominaDetalladaID}`)
        .then(res =>{
            this.setState({
                nominaDetail: res.data
            });
            console.log(res.data);
        })
    
    axios.get('http://127.0.0.1:8000/api/nominaDept/')
        .then(res =>{
            this.setState({
                nominaDept: res.data
            });
            console.log(res.data);
        })
    }
        
    render(){
        console.log(this.state.nominaDetail)
        console.log(this.state.nominaDept)
        return(
    <div>
    <Card title={this.state.nominaDetail.name}>
        <p>Apellido: {this.state.nominaDetail.last_name}</p>
        <p>cedula: {this.state.nominaDetail.cedula}</p>
    </Card>
    <br></br>
    <h1>Actualizar Nomina</h1>
    <br></br>
    <FormNomina 
    requestType="put"
    nominaID={this.props.match.params.nominaDetalladaID}
    btnText="Update"
    dataNominaDept={this.state.nominaDept}
    datNominaDetallada={this.state.nominaDetallada}
    title1="Nombre del empleado"
    dato1="name"
    title2="Apellido de empleado"
    dato2="last_name"
    title3="Cedula"
    dato3="cedula"
    title5="Ingrese el salario"/>
    </div>
        )
    }
}

export default nominaDetalle;