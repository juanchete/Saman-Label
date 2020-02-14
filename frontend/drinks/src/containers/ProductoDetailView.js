import React from 'react';

import axios from 'axios';
import {Card} from 'antd';

class ProductDetail extends React.Component {

    state = {
        producto: {}
    }

    componentDidMount(){
        const productoID = this.props.match.params.productoID;
        axios.get(`http://127.0.0.1:8000/api/productos/${productoID}`)
        .then(res =>{
            this.setState({
                producto: res.data
            });
        })
        
    }

    render(){
        return(
    <Card title={this.state.producto.name}>
        <p>{this.state.producto.price}</p>
    </Card>
        )
    }
}

export default ProductDetail;