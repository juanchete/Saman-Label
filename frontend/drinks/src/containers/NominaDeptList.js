import React from 'react';
import axios from 'axios';
import FormDept from '../components/FormDept'
import Department from '../components/Nomina';

class nominaDeptList extends React.Component {

    state = {
         nominaDept: []
     }

        componentDidMount(){
            // Promise.all([
            //     axios.get('http://127.0.0.1:8000/api/nominaDept/'),
            //     axios.get('http://127.0.0.1:8000/api/categorias/')
            //   ]).then(([productos1, categorias1]) => {
            //     // do something with both responses
            //     this.setState({
            //         productos: productos1.data,
            //         categorias: categorias1.data
            //     })
            //   })};

        axios.get('http://127.0.0.1:8000/api/nominaDept/')
        .then(res =>{
            this.setState({
                nominaDept: res.data
            });
            console.log(res.data);
        })
        
     }

            
    render(){
    
        return(
    <div>
    <Department data={this.state.nominaDept} link="nominaDept"/>
    <br></br>
    <h2>Crear producto</h2>
    <FormDept
    requestType="post"
    departmentID={null}
    djangoModel="Productos"
    btnText="Create"
    title1="Nombre del departamento"
    dato1="name"/>
    </div>
        )
    }
}

export default nominaDeptList;