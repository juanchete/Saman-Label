import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import { Checkbox,InputNumber } from 'antd';

class FormDescuento extends React.Component {
    
    state = {
        e : true,
        value: 100,
      }
      _handleChange1 = (event) => {
        this.setState({ value2: document.getElementById("descuento").value })
        console.log(this.state.value2)
      }
    onChange1= e => this.setState({e}) 


    handleFormSubmit = (event, requestType, descuentoID) => {
        event.preventDefault();
                var porcentaje = this.state.value
                var tipoDescuento = event.target.elements.tipoDescuento.value;
                var available = this.state.e.target.checked
                var data = {
                    "porcentaje": porcentaje,
                    "tipoDescuento": tipoDescuento,
                    "available":available
                }
        if(requestType=="post") {
                console.log('ENTRO A POST')
                console.log(porcentaje,tipoDescuento,available)
                return axios.post('http://127.0.0.1:8000/api/descuento/', data)
                    .then(res => console.log(res))
                    .catch(error => console.error(error));
        }if (requestType=="put"){
                return axios.put(`http://127.0.0.1:8000/api/descuento/${descuentoID}/`, data) 
                .then(res => console.log(res))
                .catch(error => console.log(error));

        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(event,
                    this.props.requestType,
                    this.props.descuentoID, 
                    )}>
                    <Form.Item label={this.props.title1} >
                        <Input name={this.props.dato1} value={this.props.tipoDescuento} placeholder={"Ingrese " + this.props.dato1 }/>
                    </Form.Item>
                    <Form.Item label={this.props.title2}>
                        <InputNumber min={0} max={100} value={this.props.porcentaje} id='descuento' onChange={this._handleChange1}/>
                    {/* <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChange}>
                    {this.props.dataNominaDept.map(item =>      
                       <option value={item.id}>{item.departmentname}</option>)}
                    </select> */}
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
export default FormDescuento