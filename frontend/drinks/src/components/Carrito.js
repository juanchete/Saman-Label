import { Select } from 'antd';
import React from 'react';
import { Form, Input, Button} from 'antd';
import axios from 'axios';


class FormCarrito extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          value: 'a',
          value1: undefined,
          value2: undefined,
          value3: undefined,
          value4: undefined
          
        }
      }
    
      handleFormSubmit = (event) => {
        event.preventDefault();
                var cliente = this.state.value4;
                var employee = this.state.value2;
                var descuento = this.state.value3;
                var producto = this.state.value1;
                var sell = event.target.elements.sell.value;
                var data1 = {
                    'cliente' : cliente,
                    'employee' : employee,
                    'descuento': descuento,
                    'producto':producto,

                }
                var data2 = {
                    'sell':sell
                }
                axios.post('http://127.0.0.1:8000/api/factura/', data1)
                .then(res => console.log(res))
                .catch(error => console.error(error));
                axios.put(`http://127.0.0.1:8000/api/stock/${producto}`,data2)
                .then(res => console.log(res))
                .catch(error => console.log(error));

        }
        
        
      
    OnChange = (event) => {
    this.setState({ value: event.target.value })
    console.log(event.target.value)
    }

    onChange(value) {
    console.log(`selected ${value}`);
}

    onBlur() {
    console.log('blur');
}

    onFocus() {
    console.log('focus');
}

    onSearch(val) {
    this.setState(this.state.value(val))
    console.log('search:', val);
}

  _handleChangeProducto = (event) => {
    this.setState({ value1: event.target.value })
    console.log(event.target.value)
  }
  _handleChangeEmpleado = (event) => {
    this.setState({ value2: event.target.value })
    console.log(event.target.value)
  }
  _handleChangeDescuento = (event) => {
    this.setState({ value3: event.target.value })
    console.log(event.target.value)
  }
  _handleChangeCliente = (event) => {
    this.setState({ value4: event.target.value })
    console.log(event.target.value)
  }
  
render() {
    const { dataProductos } = this.props
    const { dataCategorias } = this.props
    const { dataStock }= this.props
    const { dataCliente }= this.props
    const {dataDescuento} = this.props
    const {dataNominaDetallada}=this.props
    return (
        <div>
            <Form>

                <Form.Item label={this.props.title1} >
                   <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChangeCliente}>
                    {this.props.dataCliente.map(item => {
                        if(item.available){
                        return  (
                        <option value={item.id}>{item.name}</option>)
                    }
                        })
                    }
                        
                </select>
                </Form.Item>
                <Form.Item label={this.props.title2}>
                <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChangeProducto}>
                    {this.props.dataProductos.map(item => {
                        if(item.available){
                        return  (
                        <option value={item.id}>{item.name}</option>)
                        
                    }
                        })
                    }
                        
                </select>
                </Form.Item>
                <Form.Item label={this.props.title3}>
                    <Input name={this.props.dato3} placeholder={"Ingrese " + this.props.dato3} />
                </Form.Item>
                {/* <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Selecciona el producto"
                    optionFilterProp="children"
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onSearch={this.onSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                {this.props.dataCategorias.map(item2 =>
                <this.props.Option value={item2.id}>{item2.name}</this.props.Option>)}
                </Select> */}
                <Form.Item label={this.props.title4}>
                <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChangeEmpleado}>
                    {this.props.dataNominaDetallada.map(item =>
                        <option value={item.id}>{item.cedula}</option>)}
                </select>
                </Form.Item>
                <Form.Item label={this.props.title5}>
                <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChangeDescuento}>
                    {this.props.dataDescuento.map(item =>
                        <option value={item.id}>{item.tipoDescuento}</option>)}
                </select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" >{this.props.btnText}</Button>
                </Form.Item>
            </Form>
        </div>
    );
}
}
export default FormCarrito