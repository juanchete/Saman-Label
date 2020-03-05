import React from 'react';
import Productos from '../components/Productos'
import axios from 'axios';
import FormNomina from '../components/FormNomina';

class nominaDeptList extends React.Component {

    state = {
         nominaDept: [],
         nominaDetallada: []
     }

        componentDidMount(){
            Promise.all([
                axios.get('http://127.0.0.1:8000/api/nominaDept/'),
                axios.get('http://127.0.0.1:8000/api/nominaDetallada/')
              ]).then(([nominaDept1, nominaDetallada1]) => {
                // do something with both responses
                this.setState({
                    nominaDept: nominaDept1.data,
                    nominaDetallada: nominaDetallada1.data
                })
              })};
              

    //     axios.get('http://127.0.0.1:8000/api/nominaDept/')
    //     .then(res =>{
    //         this.setState({
    //             nominaDept: res.data
    //         });
    //         console.log(res.data);
    //     })
        
    //  }            
    render(){
    console.log(this.state.nominaDetallada)
        return(
    <div>
    <Productos data={this.state.nominaDetallada} link="nominaDetallada"/>
    <br></br>
    <h2>Crear Empleado</h2>
    <FormNomina
    requestType="post"
    nominaID={null}
    btnText="Create"
    title1="Nombre del empleado"
    dato1="name"
    title2="Apellido de empleado"
    dato2="last_name"
    title3="Cedula"
    dato3="cedula"
    title5="Ingrese el salario"
    dataNominaDept={this.state.nominaDept}
    dataNominaDetallada={this.state.nominaDetallada}
    />
    </div>
        )
    }
}

export default nominaDeptList;