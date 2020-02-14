import React from 'react';
import Productos from '../components/Productos'
import axios from 'axios';

class ProductList extends React.Component {

    state = {
        productos: []
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/productos')
        .then(res =>{
            this.setState({
                productos: res.data
            });
            console.log(res.data);
        })
        
    }

    render(){
        return(
    <Productos data={this.state.productos}/>
        )
    }
}

export default ProductList;