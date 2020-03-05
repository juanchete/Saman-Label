import React from 'react';
import { Form, Input, Button, InputNumber, Checkbox } from 'antd';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import { max } from 'moment';

class FormTarjetas extends React.Component {
    
    state = {
        value :undefined,
        value2 : undefined,
        date: new Date()
      }
    onChange = date => this.setState({ date })
    
    _handleChange = (event) => {
        this.setState({ value: event.target.value })
        console.log(event.target.value)
      }
      _handleChange1 = (event) => {
        this.setState({ value2: event.target.value })
        console.log(event.target.value)
      }


    handleFormSubmit = (event, requestType, tarjetasID) => {
        event.preventDefault();

                var noTarjeta = document.getElementById('noTarjeta').value;
                var CVV = document.getElementById('CVV').value
                var idPago = this.state.value;
                var banco = this.state.value2;
                var cedula = document.getElementById('cedula').value;
                this.state.date = this.state.date.getFullYear() + "-"+ parseInt(this.state.date.getMonth()+1) +"-"+this.state.date.getDate();
                console.log(this.state.date)
                var vencimiento = this.state.date;
    
                var data = {
                    "noTarjeta": noTarjeta,
                    "CVV": CVV,
                    "idPago": idPago,
                    "banco": banco,
                    "cedula": cedula,
                    "vencimiento":vencimiento
                }
         
        switch (requestType) {

            case "post":
                console.log(noTarjeta,CVV,idPago,banco,cedula,vencimiento)
                return axios.post('http://127.0.0.1:8000/api/tarjetas/', data)
                    .then(res => console.log(res), alert(''))
                    .catch(error => console.log(error), alert(''));
            case "put":
                return axios.put(`http://127.0.0.1:8000/api/tarjetas/${tarjetasID}/`, data) 
                .then(res => console.log(res), alert(''))
                .catch(error => console.log(error),alert(''));

        }
    }

    render() {

        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(event,
                    this.props.requestType,
                    this.props.tarjetasID, 
                    )}>
                    <Form.Item label={this.props.title1}>
                    <InputNumber min={0} max={max} 
                     id='cedula'/>
                    </Form.Item>
                    <Form.Item label={this.props.title2}>
                    <InputNumber min={0} max={max} 
                    id='noTarjeta'/>
                    </Form.Item>
                    <Form.Item label={this.props.title3}>
                    <InputNumber min={0} max={max} 
                    id='CVV'/>
                    </Form.Item>
                    <Form.Item label={this.props.title4}>
                    <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChange}>
                    {this.props.dataTarjetas.map(item =>      
                       <option value={item.idPago}>{item.idPago}</option>)}
                    </select>
                    </Form.Item>
                    <Form.Item label={this.props.title5}>
                    <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChange1}>      
                       <option value='PROVINCIAL'>Provincial</option>
                       <option value='BANPLUS'>Banplus</option>
                       <option value='MERCANTIL'>Mercantil</option>)
                    </select>
                    </Form.Item>
                    <Form.Item label="Ingrese fecha de vencimineto">
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
export default FormTarjetas;