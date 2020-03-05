import React from 'react';
import Productos from '../components/Productos'
import axios from 'axios';
import CustomForm from '../components/Form'

class QueryRecomendaciones extends React.Component {

    state = {
         productos: []
     }

        componentDidMount(){
            Promise.all([

        axios.get('http://127.0.0.1:8000/query/recomendaciones')
        .then(res =>{
            this.setState({
                productos: res.data
            });
            console.log(res.data);
        })])}
        
    


    render(){
        return(
    <div>
        <h1>HOLA</h1>
    </div>
        )
    }
}

export default QueryRecomendaciones;