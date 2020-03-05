import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';

class CustomForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          value: 'a'
          
        }
      }
    
      _handleChange = (event) => {
        this.setState({ value: event.target.value })
        console.log(event.target.value)
      }

    handleFormSubmit = (event, requestType, productoID, djangoModel) => {
        event.preventDefault();
        switch (djangoModel) {
            case "Category":
                var name = event.target.elements.name.value;
                break;
            case "Productos":
                name = event.target.elements.name.value;
                var price = event.target.elements.price.value;
                var category = this.state.value;
                console.log(this.state.value)
                break;
            case "Clientes":
                name = event.target.elements.name.value;
                var last_name = event.target.elements.last_name.value;
                var telephone = event.target.elements.cedula.value;
                var birthday = event.target.elements.birthday.value;
                break;
             case "ProdStock":
                var serial = event.target.elements.serial.value;
                var buy = event.target.elements.buy.value;
                var sold = event.target.elements.sold.value;
                break;
            case "NominaDept":
                var departmentname = event.target.elements.departmentname.value;
                break;
            case "NominaDetallada":
                var cedula = event.target.elements.cedula.value;
                name = event.target.elements.name.value;
                last_name = event.target.elements.last_name.value;
                var salary = event.target.elements.salary.value;
                var department = event.target.elements.department.value;
                break;
            case "Delivery":
                var client = event.target.elements.client.value;
                var direction = event.target.elements.direction.value;
                var employee = event.target.elements.employee.value;
                break;
            case "Descuento":
                var tipoDescuento = event.target.elements.tipoDescuento.value;
                var porcentaje = event.target.elements.porcentaje.value;
                break;
            case "Factura":
                var cliente = event.target.elements.cliente.value;
                employee = event.target.elements.employee.value;
                var descuento = event.target.elements.descuento.value;
                price = event.target.elements.price.value;
                var serialDescuento = event.target.elements.serialDescuento.value;
                var day = event.target.elements.day.value;
                break;
            case "FacturaDetallada":
                serial = event.target.elements.serial.value;
                var precio = event.target.elements.precio.value;
                break;
                
        }

        switch (requestType) {

            case "post":
                var data = {
                    "category": category,
                    "name": name,
                    "price": price,
                   
                }
                return axios.post('http://127.0.0.1:8000/api/productos/', data)
                    .then(res => console.log(res))
                    .catch(error => console.error(error));
            
            case "put":
                data = {
                    "category": category,
                    "name": name,
                    "price": price,

                }
                return axios.put(`http://127.0.0.1:8000/api/productos/${productoID}/`, data) 
                .then(res => console.log(res))
                .catch(error => console.log(error));

        }
    }

    render() {
        const {dataProductos} = this.props
        const {dataCategorias} = this.props
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
                    <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChange}>
                    {this.props.dataCategorias.map(item =>      
                       <option value={item.id}>{item.name}</option>)}
                    </select>
                    {/* <Form.Item label={this.props.title2}>
                        <Input name={this.props.dato2} placeholder={"Ingrese " + this.props.dato2} />
                    </Form.Item> */}
                    <Form.Item label={this.props.title3}>
                        <Input name={this.props.dato3} placeholder={"Ingrese "+ this.props.dato3} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >{this.props.btnText}</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
export default CustomForm;