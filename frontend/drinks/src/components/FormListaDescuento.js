import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import { Checkbox,InputNumber } from 'antd';

class FormListaDescuento extends React.Component {
    
    state = {
        e : true,
        value: undefined
      }

    onChange1= e => this.setState({e}) 
    _handleChange = (event) => {
        this.setState({ value: event.target.value })
        console.log(event.target.value)
      }

    handleFormSubmit = (event, requestType, listaDescuentoID) => {
        event.preventDefault();
                var porcentaje = document.getElementById("porcentaje").value;
                var available = this.state.e.target.checked;
                var serial = this.state.value;
                var data = {
                    "serial": serial,
                    "porcentaje": porcentaje,
                    "available": available
                }
        if(requestType=="post") {

                console.log('ENTRO A POST')
                return axios.post('http://127.0.0.1:8000/api/listaDescuento/', data)
                    .then(res => console.log(res))
                    .catch(error => console.error(error));
        }if (requestType=="put"){
                return axios.put(`http://127.0.0.1:8000/api/listaDescuento/${listaDescuentoID}/`, data) 
                .then(res => console.log(res))
                .catch(error => console.log(error));

        }
    }

    render() {
        const {dataProductos}= this.props
        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(event,
                    this.props.requestType,
                    this.props.listaDescuentoID, 
                    )}>
                    <Form.Item label={this.props.title1} >
                    <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChange}>
                    {this.props.dataProductos.map(item =>      
                       <option value={item.id}>{item.name}</option>)}
                    </select>
                    </Form.Item>
                    <Form.Item label={this.props.title2}>
                    <InputNumber min={0} max={100} defaultValue={0} id='porcentaje'/>
                    </Form.Item>
                    <Form.Item>
                    <Checkbox onChange={this.onChange1}>Disponible</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >{this.props.btnText}</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
export default FormListaDescuento