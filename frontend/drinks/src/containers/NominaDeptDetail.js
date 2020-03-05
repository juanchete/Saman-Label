import React from 'react';
import axios from 'axios';
import FormDept from '../components/FormDept';
import {Card} from 'antd';
class nominaDeptList extends React.Component {

    state = {
         nominaDept: {}
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
        const departmentID = this.props.match.params.departmentID;
        axios.get(`http://127.0.0.1:8000/api/nominaDept/${departmentID}`)
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
    <Card title={this.state.nominaDept.name}>
        <p>Activo: {this.state.nominaDept.available}</p>
    </Card>
    <br></br>
    <h2>Actualizar departamento</h2>
    <FormDept
    requestType="post"
    departmentID={this.props.match.params.departmentID}
    btnText="Create"
    title1="Nombre del departamento"
    dato1="name"/>
    </div>
        )
    }
}

export default nominaDeptList;
