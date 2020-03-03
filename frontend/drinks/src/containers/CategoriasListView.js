import React from 'react';
import Productos from '../components/Productos'
import axios from 'axios';
import FormCategoria from '../components/FormCategoria';

class CategoriasList extends React.Component{
    state = {
        categorias : []
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/categorias/')
        .then(res =>{
            this.setState({
                categorias: res.data
            });
            console.log(res.data);
        })
        
    }
    render(){
        return(
    <div>
    <Productos data={this.state.categorias} link="categorias"/>
    <br></br>
    <h2>Registrar Categoria</h2>
    <FormCategoria
    requestType="post"
    title1="Ingrese el nombre de la categoria"
    dato1="name"
    btnText="Create"/>
    </div>
        )
    }
}
export default CategoriasList;