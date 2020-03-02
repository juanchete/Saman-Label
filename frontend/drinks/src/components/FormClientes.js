import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import CheckableTag from 'antd/lib/tag/CheckableTag';

class FormClientes extends React.Component {
    
    state = {
        date: new Date(),
      }
    onChange = date => this.setState({ date })

    handleFormSubmit = (event, requestType, clienteID, djangoModel) => {
        event.preventDefault();
         if (djangoModel=="Clientes") {
                var name = event.target.elements.name.value;
                var last_name = event.target.elements.last_name.value;
                var cedula = event.target.elements.cedula.value;
                var telephone = event.target.elements.cedula.value;
                console.log(this.state.date)
                this.state.date = this.state.date.getFullYear() + "-"+ parseInt(this.state.date.getMonth()+1) +"-"+this.state.date.getDate();
                var birthday = this.state.date

                
        }else{
            console.log("Error")
        }

        switch (requestType) {

            case "post":
                var data = {
                    "name": name,
                    "last_name": last_name,
                    "telephone": telephone,
                    "birthday": birthday,
                    "cedula": cedula
                }
                return axios.post('http://127.0.0.1:8000/api/clientes/', data)
                    .then(res => console.log(res))
                    .catch(error => console.error(error));
            
            case "put":
                data = {
                    "name": name,
                    "last_name": last_name,
                    "telephone": telephone,
                    "birthday": birthday,
                    "cedula":cedula
                }
                return axios.put(`http://127.0.0.1:8000/api/clientes/${clienteID}/`, data) 
                .then(res => console.log(res))
                .catch(error => console.log(error));

        }
    }

    render() {

        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(event,
                    this.props.requestType,
                    this.props.productoID, 
                    this.props.djangoModel
                    )}>
                    <Form.Item label={this.props.title1} >
                        <Input name={this.props.dato1} placeholder={"Ingrese " + this.props.dato1 }/>
                    </Form.Item>
                    <Form.Item label={this.props.title2}>
                        <Input name={this.props.dato2} placeholder={"Ingrese " + this.props.dato2} />
                    </Form.Item>
                    <Form.Item label={this.props.title3}>
                        <Input name={this.props.dato3} placeholder={"Ingrese "+ this.props.dato3} />
                    </Form.Item>
                    <Form.Item label={this.props.title5}>
                        <Input name={this.props.dato5} placeholder={"Ingrese "+ this.props.dato5} />
                    </Form.Item>
                    <Form.Item label="Ingrese su cumpleaños">
                    <DatePicker
                    
                    onChange={this.onChange}
                    value={this.state.date}
                    />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >{this.props.btnText}</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
export default FormClientes;