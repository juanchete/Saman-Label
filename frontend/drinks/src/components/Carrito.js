import { Select } from 'antd';
import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { InputNumber } from 'antd';
import { Checkbox } from 'antd';

var xs1 = [1];
var x1 = 0;
var valoris = [0];
var valorib = [0];
var cantidad1= [0];

class FormCarrito extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
            value1: [],
            value2: undefined,
            value3: undefined,
            value4: undefined,
            value5: undefined,
            cantidad: [0],
            xs:[1],
            e: false

        }
    }

    handleFormSubmit = (event, cantidad) => {
        for(const x in cantidad){
        var cliente = this.state.value4;
        var employee = this.state.value2;
        var descuento = this.state.e.target.checked;
        var serialdescuento = this.state.value3;
        var producto = this.state.value1[x];
        var buy = valorib[x];
        var sell = valoris[x];
        try {
            sell = document.getElementById("cantidad") + valoris[x];
            buy = valorib[x] - document.getElementById("cantidad");
        } catch{
            alert('No puedes comprar esto we');
        }
        var data1 = {
            'cliente': cliente,
            'employee': employee,
            'descuento': descuento,
            'price': 100,
            'serialDescuento': serialdescuento,
            'day': null,
        }
        var data2 = {
            'sold': sell,
            'buy': buy
        }
        //axios.post('http://127.0.0.1:8000/api/factura/', data1)
        //    .then(res => console.log(res))
        //    .catch(error => console.error(error));
        axios.put(`http://127.0.0.1:8000/api/stock/${producto}`, data2)
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }
    }

    NewProducto (){

    }

    OnChange = (event) => {
        this.setState({ value: event.target.value })
        console.log(event.target.value)
    }

    onChange(value) {
        console.log(`selected ${value}`);
    }

    onChange1 = e => this.setState({ e })

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

    _handleChangeProducto = (event, index) => {
        let a = this.state.value1.slice();
        if(a.length==1){
            a.push(event.target.value)
        }else{
        a[index]= event.target.value}
        this.setState({ value1: a })
        if(xs1.length==1){
        xs1.push(event.target.value)}else{
            xs1[index]=event.target.value

        }
        console.log(xs1)
        console.log(xs1[index])
        this.setState({xs:xs1})
        this.setState({cantidad: cantidad1})
        console.log()
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

    NewProducto(){
        cantidad1 = this.state.cantidad;
        cantidad1.push(cantidad1.length);
        this.setState({cantidad :cantidad1});
        this.setState({xs:xs1})
        console.log(this.state.cantidad);
    }

    render() {
        const { dataProductos } = this.props
        const { dataCategorias } = this.props
        const { dataStock } = this.props
        const { dataCliente } = this.props
        const { dataDescuento } = this.props
        const { dataNominaDetallada } = this.props



        return (

            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(event)}>

                    <Form.Item label={this.props.title1} >
                        <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChangeCliente}>
                            {this.props.dataCliente.map(item => {
                                if (item.available) {
                                    return (
                                        <option value={item.id}>{item.name}</option>)
                                }
                            })
                            }

                        </select>
                    </Form.Item>
                    <Form.Item label={this.props.title2}>
                      { cantidad1.map((producto)=> {
                          console.log(producto)
                          return ( 
                          
                        <div>  
                        <select defaultValue="Select" style={{ width: 120 }} onChange={(event)=>this._handleChangeProducto(event, producto)}>
                            {this.props.dataProductos.map(item => {
                                if (item.available) {
                                    return (
                                    <option value={item.id} >{item.name}{item.price}</option>
                                    )

                                }
                            })
                            }

                        </select>
                        <div>

                        {this.props.dataStock.map(item => {
                            console.log(producto)
                            console.log(this.state.xs)
                            console.log(this.state.xs[producto]);
                            if(producto.length==1){
                                valorib[producto] = item.buy;
                                valoris[producto] = item.sold;
                                console.log(valoris)
                                return (
                                    <InputNumber min={0} max={item.buy} defaultValue={0} id='cantidad' />
                                )}else{
                                    console.log(this.state.xs[producto])
                            if (this.state.xs[producto] == item.serializador) {
                                valorib[producto] = item.buy;
                                valoris[producto] = item.sold;
                                console.log(valoris)
                                return (
                                    <InputNumber min={0} max={item.buy} defaultValue={0} id='cantidad' />
                                )
                            }
                            }

                        })
                        }
                        </div>
                        </div>
                      )})}

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

                        <Form.Item>
                            <Checkbox onChange={this.onChange1}>Disponible</Checkbox>
                        </Form.Item>

                        <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChangeDescuento}>

                            {this.props.dataDescuento.map(item =>
                                <option value={item.id}>{item.tipoDescuento}</option>)}
                        </select>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" onClick={this.NewProducto.bind(this)} >añadir</Button>
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