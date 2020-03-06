import React from 'react';
import axios from 'axios';
import FormQueries from '../components/FormQueries';

class queries extends React.Component {

    state = {
        queryChill: [],
        queryRecomendaciones: [],
        queryProductosTop:[],
        queryProductosVendidos:[],
        queryEmpleadoMes:[],
        queryEmpleadosMejoresPagados:[],
        queryJuan:[]
    }

    
    componentDidMount(){
        // Promise.all([
        // axios.get(`http://127.0.0.1:8000/api/query/chill/`),
        // axios.get('http://127.0.0.1:8000/api/query/recomendaciones')
        // ]).then(([queryChill1,queryRecomendaciones1])=>{
        //     this.setState({
        //         queryChill: queryChill1.data,
        //         queryRecomendaciones: queryRecomendaciones1.data
        //     })
        // })};
        axios.get('http://127.0.0.1:8000/query/chill')
        .then(res =>{
            this.setState({
                queryChill: res.data
            });
            console.log(res.data);
        }) 
        axios.get('http://127.0.0.1:8000/query/recomendaciones')
        .then(res =>{
            this.setState({
                queryRecomendaciones: res.data
            });
            console.log(res.data);
        })       
        axios.get('http://127.0.0.1:8000/query/productos-top')
        .then(res =>{
            this.setState({
                queryProductosTop: res.data
            });
            console.log(res.data);
        }) 
        axios.get('http://127.0.0.1:8000/query/productos-vendidos')
        .then(res =>{
            this.setState({
                queryProductosVendidos: res.data
            });
            console.log(res.data);
        })  
        axios.get('http://127.0.0.1:8000/query/empleado-mes')
        .then(res =>{
            this.setState({
                queryEmpleadoMes: res.data
            });
            console.log(res.data);
        })    
        axios.get('http://127.0.0.1:8000/query/empleado-mejores-pagados')
        .then(res =>{
            this.setState({
                queryEmpleadosMejoresPagados: res.data
            });
            console.log(res.data);
        }) 
        axios.get('http://127.0.0.1:8000/query/empleado-juan')
        .then(res =>{
            this.setState({
                queryJuan: res.data
            });
            console.log(res.data);
        })                       
    }
    render(){

        return(
    <div>
    <FormQueries
    requestType="put"
    btnText="Update"
    dataQuery={this.state.queryChill}
    DataqueryRecomendaciones={this.state.queryRecomendaciones}
    DataqueryProductosTop={this.state.queryProductosTop}
    DataqueryProductosVendidos={this.state.queryProductosVendidos}
    DataqueryEmpleadoMes={this.state.queryEmpleadoMes}
    DataqueryEmpleadosMejoresPagados={this.state. queryEmpleadosMejoresPagados}
    DataqueryJuan={this.state.queryJuan}
    />
    </div>
        )
    }
}

export default queries;
