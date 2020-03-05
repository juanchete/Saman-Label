import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import { Checkbox,InputNumber } from 'antd';

class FormNomina extends React.Component {
    
    state = {
        e : true,
        value: undefined
      }

    onChange1= e => this.setState({e}) 
    _handleChange = (event) => {
        this.setState({ value: event.target.value })
        console.log(event.target.value)
      }

    handleFormSubmit = (event, requestType, nominaID) => {
        event.preventDefault();
                var cedula = document.getElementById("cedula").value;
                var name = event.target.elements.name.value;
                var last_name = event.target.elements.last_name.value;
                var salary = document.getElementById("salary").value;
                var available = this.state.e.target.checked;
                var department = this.state.value;
                var data = {
                    "name": name,
                    "last_name": last_name,
                    "salary": salary,
                    "department": department,
                    "cedula": cedula,
                    "available": available
                }
        if(requestType=="post") {

                console.log('ENTRO A POST')
                console.log(department)
                return axios.post('http://127.0.0.1:8000/api/nominaDetallada/', data)
                    .then(res => console.log(res))
                    .catch(error => console.error(error));
        }if (requestType=="put"){
                return axios.put(`http://127.0.0.1:8000/api/nominaDetallada/${nominaID}/`, data) 
                .then(res => console.log(res))
                .catch(error => console.log(error));

        }
    }

    render() {
        const {nominaDetallada} = this.props
        const {nominaDept} = this.props
        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(event,
                    this.props.requestType,
                    this.props.nominaID, 
                    )}>
                    <Form.Item label={this.props.title1} >
                        <Input name={this.props.dato1} placeholder={"Ingrese " + this.props.dato1 }/>
                    </Form.Item>
                    <Form.Item label={this.props.title2}>
                        <Input name={this.props.dato2} placeholder={"Ingrese " + this.props.dato2} />
                    </Form.Item>
                    <Form.Item label={this.props.title3}>
                        <InputNumber min={0} max={30000000} defaultValue={0} id='cedula'/>
                    </Form.Item>
                    <Form.Item label={this.props.title5}>
                    <InputNumber min={0} max={2147483647} defaultValue={0} id='salary'/>
                    </Form.Item>
                    <Form.Item>
                    <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChange}>
                    {this.props.dataNominaDept.map(item =>      
                       <option value={item.id}>{item.departmentname}</option>)}
                    </select>
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
export default FormNomina