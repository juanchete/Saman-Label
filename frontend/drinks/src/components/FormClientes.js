import React from 'react';
import { Form, Input, Button, InputNumber, Checkbox } from 'antd';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import { max } from 'moment';

class FormClientes extends React.Component {
    
    state = {
        date: new Date(),
        e : false
      }
    onChange = date => this.setState({ date })

    onChange1= e => this.setState({e}) 
        

    handleFormSubmit = (event, requestType, clienteID) => {
        event.preventDefault();

                var name = event.target.elements.name.value;
                var last_name = event.target.elements.last_name.value;
                var cedula = document.getElementById('cedula').value
                var telephone = event.target.elements.telephone.value;
                console.log(this.state.e.target.checked)
                var available = this.state.e.target.checked;
                var direction = event.target.elements.direction.value;
                this.state.date = this.state.date.getFullYear() + "-"+ parseInt(this.state.date.getMonth()+1) +"-"+this.state.date.getDate();
                console.log(this.state.date)
                var birthday = this.state.date;

                var data = {
                    "name": name,
                    "last_name": last_name,
                    "telephone": telephone,
                    "birthday": birthday,
                    "cedula": cedula,
                    "available":available,
                    "direction":direction
                }
         
        switch (requestType) {

            case "post":
                return axios.post('http://127.0.0.1:8000/api/clientes/', data)
                    .then(res => console.log(res), alert('Se ha creado el cliente con exito'))
                    .catch(error => console.log(error), alert('Ya se ha creado un cliente con la misma cedula'));
            case "put":
                console.log(name,last_name,telephone,birthday,cedula,available,direction)
                return axios.put(`http://127.0.0.1:8000/api/clientes/${clienteID}/`, data) 
                .then(res => console.log(res), alert('Se ha actualizado al cliente con exito'))
                .catch(error => console.log(error),alert('Introduzca datos validos'));

        }
    }

    render() {

        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(event,
                    this.props.requestType,
                    this.props.clienteID, 
                    )}>
                        <Form.Item label="Ingrese su cumpleaños">
                    <DatePicker
                    
                    onChange={this.onChange}
                    value={this.state.date}
                    />
                    </Form.Item>
                    <Form.Item>
                    <Checkbox onChange={this.onChange1}>Disponible</Checkbox>
                    </Form.Item>
                    <Form.Item label={this.props.title1} >
                        <Input name={this.props.dato1} key={`${Math.floor((Math.random() * 1000))}-min`}
                         placeholder={"Ingrese " + this.props.dato1 }/>
                    </Form.Item>
                    <Form.Item label={this.props.title2}>
                        <Input name={this.props.dato2} key={`${Math.floor((Math.random() * 1000))}-min`}
                          placeholder={"Ingrese " + this.props.dato2} />
                    </Form.Item>
                    <Form.Item label={this.props.title3}>
                        <Input name={this.props.dato3} key={`${Math.floor((Math.random() * 1000))}-min`} 
                         placeholder={"Ingrese "+ this.props.dato3} />
                    </Form.Item>
                    <Form.Item label={this.props.title5}>
                    <InputNumber min={0} max={max} key={`${Math.floor((Math.random() * 1000))}-min`}
                     id='cedula'/>
                    </Form.Item>
                    <Form.Item label={this.props.title6}>
                        <Input name={this.props.dato6} key={`${Math.floor((Math.random() * 1000))}-min`}
                         placeholder={"Ingrese "+ this.props.dato6} />
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