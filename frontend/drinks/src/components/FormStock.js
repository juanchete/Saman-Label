import React from 'react';
import { Form, Input, Button} from 'antd';
import axios from 'axios';
import { InputNumber } from 'antd';

var maxVentas;

class StockForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          value: 'a'
          
        }
      }
        checkStock(obj) {
        var x 
        var input = document.getElementById("stock").value;
        console.log(input)
        maxVentas=input;
    }
      _handleChange = (event) => {
        this.setState({ value: event.target.value })
        console.log(event.target.value)
      }
      

    handleFormSubmit = (event, requestType, stockID) => {
                event.preventDefault();
                var serial = this.state.value;
                var buy = document.getElementById("stock").value
                var sold = document.getElementById("vendidos").value
                var data = {
                        "serializador": serial,
                        "buy": buy,
                        "sold": sold,
                }
                if(requestType="post"){
                    if(sold>buy){
                        alert("No se puede vender mas de lo disponible en Stock")
                    }if(buy>=sold){
                    return axios.post('http://127.0.0.1:8000/api/stock/', data)
                        .then(res => console.log(res))
                        .catch(error => console.error(error), alert("El stock de este producto ya ha sido creado"));
                    }
                }if(requestType=="put"){
                return axios.put(`http://127.0.0.1:8000/api/stock/${stockID}/`, data) 
                    .then(res => console.log(res))
                    .catch(error => console.log(error));

        }
    }

    render() {
        const {dataProductos} = this.props
        const {dataStock} = this.props
        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(event,
                    this.props.stockID,this.requestType
                    )}>

                    <Form.Item label={this.props.title1} >
                        <InputNumber min={0} max={2147483647} defaultValue={0} id='stock' onChange={this.checkStock}/>
                    </Form.Item>
                    <Form.Item label={this.props.title2} >
                        <InputNumber min={0} max={120} defaultValue={0} id='vendidos'/>
                    </Form.Item>
                    <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChange}>
                    {this.props.dataProductos.map(item =>      
                       <option value={item.id}>{item.name}</option>)}
                    </select>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >{this.props.btnText}</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
export default StockForm;