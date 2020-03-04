import React from 'react'
import axios from 'axios'
import {Card} from "antd"
import FormCategoria from '../components/FormCategoria'

class CategoriasDetailView extends React.Component{
    state = {
        categoria: {},
     }

    
    componentDidMount(){
        const categoriaID = this.props.match.params.categoriaID;
    
        axios.get(`http://127.0.0.1:8000/api/categorias/${categoriaID}/`)
        .then(res =>{
            this.setState({
                categoria: res.data
            });
        })
        console.log(this.props.match.params.categoriaID)
        console.log(categoriaID)
        
    }
    
    render(){
        return(
            <div>
            <Card title={this.state.categoria.name}>
                <p>{this.state.categoria.available}</p>
            </Card>
            <FormCategoria 
            requestType="put"
            categoriaID={this.props.match.params.categoriaID}
            title1="Ingrese la categoria"
            dato1="name"
            btnText="Update"/>
            </div>
        )
    }
}





export default CategoriasDetailView;