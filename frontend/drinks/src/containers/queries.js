import React from 'react';
import axios from 'axios';
import {Card} from 'antd';
import FormQueries from '../components/FormQueries';

class queries extends React.Component {

    state = {
        queryChill: [],
        queryRecomendaciones: []
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
    }
    render(){

        return(
    <div>
    <FormQueries
    requestType="put"
    btnText="Update"
    dataQuery={this.state.queryChill}/>
    </div>
        )
    }
}

export default queries;
