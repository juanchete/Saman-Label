import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { InputNumber } from 'antd';
import { Checkbox } from 'antd';

var xs1 = [1];
var productos = [1];
var valoris = [0];
var valorib = [0];
var cantidad1 = [0];
var descuento = [1];
var descuentoG = 0;
var precioI = [0];
var precioF = [0];
var lDescuento = [1];
var pagos = [0];

class FormCarrito extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
            value1: [1],
            value2: undefined,
            value3: undefined,
            value4: undefined,
            delivery: false,
            descuento: [1],
            IDescuento: [0],
            pagos: [0], // vector que crece para aumentaar la cantidad de pagos
            pagos2: [1], // vector que contiene la cantidad de dinero pagada en cada pago
            instrumentos: ['TARJETA'],
            precio: 0,
            compra: [0], // este array contiene las cantidades de productos
            cantidad: [0], //esta  es la cantidad de productos diferentes que estan siendo comprados
            xs: [1], //esto es el vector que contiene el id al que se le modificara el stock
            e: false,
            idFactura: null

        }
    }

    handleFormSubmit = (event, objetos) => {
        event.preventDefault()
        var price = this.state.precio
        var cliente = this.state.value4
        var employee = this.state.value2
        var serialdescuento = descuentoG

        const data1 = {
            'cliente': cliente,
            'employee': employee,
            'price': price,
            'serialDescuento': serialdescuento
        }
        console.log(cliente, employee, price, serialdescuento)

        axios.post('http://127.0.0.1:8000/api/factura/', data1)
            .then(res => {
                this.setState({
                    ...this.state,
                    idFactura: res.data.id
                }, () => { 
                    console.log(this.state.idFactura)
                    precioI.map((precio, index) => {
                        precioF[index] = precio * this.state.compra[index]
                    })
                    console.log(precioI)
            
                    var data2 = []
            
                
                    cantidad1.map(item => {
                        var factura = this.state.idFactura
                        var serial = this.state.xs[item]
                        var precioI2 = precioI[item]
                        var precioF2 = precioF[item]
                        var cantidad2 = this.state.compra[item]
            
                        let dataaa = {
                            'factura': factura,
                            'serial': serial,
                            'precioI': precioI2,
                            'precioF': precioF2,
                            'cantidad': cantidad2
            
                        }
            
                        data2.push(dataaa);
                })
                data2.map(item => {
                    console.log(this.state.idFactura,this.state.xs,this.state.preci)
                    axios.post('http://127.0.0.1:8000/api/facturaDetallada/', item)
                        .then(res => console.log(res))
                        .catch(error => console.error(error));
                })

                cantidad1.map(item =>{
                    var buy = valorib[item] - this.state.compra[item]
                    var sell =  valorib[item] + this.state.compra[item]
                    var serializador = this.state.xs[item]
        
                    let y = {
                        'buy': buy,
                        'sold': sell,
                        'serializador':serializador
                    }
                    axios.put(`http://127.0.0.1:8000/api/stock/${serializador}/`, y)
                        .then(res => console.log(res))
                        .catch(error => console.error(error));
                })
        
        
                if (this.state.delivery) {
        
                    let q = document.getElementById('direccion').value
                    console.log(q)
                    let m = {
                        'direction': q,
                        'employee': employee,
                        'idFactura': this.state.idFactura
                    }
                    console.log(q,employee,this.state.idFactura)
                    axios.post('http://127.0.0.1:8000/api/delivery/', m)
                        .then(res => console.log(res))
                        .catch(error => console.error(error));
                }
        
        
                this.state.pagos.map(item => {
                    var monto = this.state.pagos2[item]
                    var inst = this.state.instrumentos[item]
                    var fact = this.state.idFactura
        
                    let i = {
                        'factura': fact,
                        'Instrumentos': inst,
                        'Monto': monto
                    }
                    axios.post('http://127.0.0.1:8000/api/recibos/', i)
                        .then(res => console.log(res))
                        .catch(error => console.error(error));
                })
                
                })
                })
            .catch(error => console.error(error));

           

        

        // cantidad1.map(item =>{
        //     var buy = valorib[item] - this.state.compra[item]
        //     var sell =  valorib[item] + this.state.compra[item]
        //     var serializador = this.state.xs[item]

        //     let y = {
        //         'buy': buy,
        //         'sell': sell,
        //         'serializador':serializador
        //     }
        //     axios.put(`http://127.0.0.1:8000/api/stock/${serializador}`, y)
        //         .then(res => console.log(res))
        //         .catch(error => console.error(error));
        // })


        // if (this.state.delivery) {
        //     let q = document.getElementById('direccion')

        //     let m = {
        //         'direction': q,
        //         'employee': employee,
        //         'idFactura': this.state.idFactura
        //     }
        //     axios.post('http://127.0.0.1:8000/api/delivery/', m)
        //         .then(res => console.log(res))
        //         .catch(error => console.error(error));
        // }


        // this.state.pagos.map(item => {
        //     var monto = this.state.pagos2[item]
        //     var inst = this.state.instrumentos[item]
        //     var fact = this.state.idFactura

        //     let i = {
        //         'factura': fact,
        //         'Instrumentos': inst,
        //         'Monto': monto
        //     }
        //     axios.post('http://127.0.0.1:8000/api/recibos/', i)
        //         .then(res => console.log(res))
        //         .catch(error => console.error(error));
        // })


    }


    OnChange = (event) => {
        this.setState({ value: event.target.value })
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
        if (a.length == 1) {
            a = [Number(event.target.value)]
        } else {
            a[index] = Number(event.target.value)
        }
        this.setState({ value1: a })
        if (xs1.length == 1) {
            xs1 = [Number(event.target.value)]
        } else {

            xs1[index] = Number(event.target.value)

        }
        this.props.dataProductos.map(item => {
            if (item.id == event.target.value) {
                if (precioI.length == 1) {
                    precioI = [item.price]
                } else {

                    precioI[index] = item.price

                }
            }
        })
        this.props.dataListaDescuento.map(item => {
            if (item.serial == event.target.value) {
                descuento[index] = item.porcentaje
            }
        })
        console.log(precioI)
        console.log(event.target.value)

        console.log(descuento)
        this.setState({ xs: xs1 })
        this.setState({ cantidad: cantidad1 })
        console.log(this.state.cantidad)
    }
    _handleChangeProducto2 = (value, index) => {
        let a = this.state.value1.slice();
        if (a.length == 1) {
            a = [value]
        } else {
            a[index] = value
        }
        this.setState({ value1: a })
        if (xs1.length == 1) {
            xs1 = [value]
        } else {

            xs1[index] = value

        }
        this.props.dataProductos.map(item => {
            if (item.id == value) {
                if (precioI.length == 1) {
                    precioI = [item.price]
                } else {

                    precioI[index] = item.price

                }
            }
        })
        console.log(precioI)
        console.log(value)
        this.props.dataListaDescuento.map(item => {
            if (item.serial == value) {
                descuento[index] = item.porcentaje
            }
        })
        console.log(descuento)
        this.setState({ xs: xs1 })
        this.setState({ cantidad: cantidad1 })
    }
    _handleChangeEmpleado = (event) => {
        this.setState({ value2: event.target.value })
    }
    _handleChangeDescuento = (event) => {
        descuentoG = Number(event.target.value)
        console.log(descuentoG)
        this.calcularPrecio()
        // this.setState({ value3: event.target.value })
        //console.log(this.state.value3)
    }
    _handleChangeCliente = (event) => {
        this.setState({ value4: event.target.value })
    }

    delivery = (e) => {
        let m = this.state.delivery
        m = !m
        this.setState({ delivery: m })
        console.log(this.state.delivery)
    }

    cantidad(e, index) {

        let r = this.state.compra.slice()
        console.log(r)
        r[index] = e
        console.log(r)
        this.setState(this.state.compra = r)
        console.log('prod' + index)
        console.log(this.props.dataFactura)
        this._handleChangeProducto2(document.getElementById('prod' + index).value, index)
        this.calcularPrecio()

    }

    calcularPrecio() {
        console.log('qlq')
        let q = 0;
        console.log(precioI)
        precioI.map((item, index) => {
            console.log(item)
            console.log(descuento[index])
            console.log(item * descuento[index] / 100)
            q = q + (item - ((item * descuento[index] / 100))) * this.state.compra[index]

        })
        console.log(this.state.value3)
        console.log(q)
        q = q - q * (descuentoG / 100)
        //        cantidad.map()
        this.setState({ precio: q })
        console.log(this.state.precio)

    }

    NewProducto() {
        cantidad1 = this.state.cantidad;
        let a = 0;
        cantidad1.map(prod => {
            a++;
        })
        if (a == this.props.dataProductos.length) {
            alert('no existen mas productos diferentes')
        } else {
            productos.push(0)
            xs1.push(0)
            descuento.push(0)
            precioI.push(0)
            precioF.push(0)
            valorib.push(0)
            valoris.push(0)
            console.log(descuento)
            cantidad1.push(cantidad1.length);
            this.setState({ value1: productos })
            this.setState({ cantidad: cantidad1 });
            this.setState({ xs: xs1 })
        }
    }



    descuento() {
        this.setState({ descuento: descuento })
    }

    NewPago() {
        pagos.push(pagos.length)
        let q = this.state.pagos2
        q.push(0)
        this.setState({ pagos: pagos })
        this.setState({ pagos2: q })
    }

    montos(e, index) {
        let l = this.state.pagos2
        l[index] = Number(e.target.value)
        this.setState({ pagos2: l })
        console.log(this.state.pagos2)
    }

    pagos(e, index) {
        let l = this.state.instrumentos
        l[index] = e.target.value
        this.setState({ instrumentos: l })
        console.log(this.state.instrumentos)
    }

    render() {

        return (

            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(event)}>

                    <Form.Item label={this.props.title1} >
                        <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChangeCliente}>
                            <option value=''> seleccionar</option>
                            {this.props.dataCliente.map(item => {
                                if (item.available) {
                                    return (
                                        <option value={item.id}>{item.name}</option>)
                                }
                            })
                            }

                        </select>
                    </Form.Item>

                    <h2>Al agregar los productos compre la cantidad que desea  del producto que desea solo una vez.</h2>

                    <Form.Item label={this.props.title2}>
                        {cantidad1.map((producto) => {
                            return (

                                <div>
                                    <select defaultValue="Select" style={{ width: 120 }} id={`prod` + `${producto}`} onChange={(event) => this._handleChangeProducto(event, producto)}>
                                        
                                        <option value="">
                                            seleccionar
                                        </option>
                                        {this.props.dataProductos.map(item => {
                                            if (item.available) {
                                                this.props.dataListaDescuento.map(stock => {
                                                    if (stock.serial == item.id) {
                                                        descuento[producto] = stock.porcentaje
                                                    }
                                                })


                                                if (item.id == 1 && precioI.length == 1) {
                                                    precioI = [item.price]
                                                    console.log(precioI)
                                                }
                                                return (
                                                    <option value={item.id} >{item.name}{item.price}</option>
                                                )

                                            }

                                        })
                                        }

                                    </select>
                                    <div>

                                        {this.props.dataStock.map(item => {

                                            if (this.state.xs[producto] == item.serializador) {
                                                valorib[producto] = item.buy;
                                                valoris[producto] = item.sold;
                                                return (
                                                    <InputNumber min={0} max={item.buy} defaultValue={0} id={`cantidad` + `${producto}`} onChange={e => this.cantidad(e, producto)} />
                                                )
                                            }
                                        }

                                        )
                                        }
                                    </div>
                                    <div>
                                        {this.props.dataListaDescuento.map(item => {
                                            // if (this.state.value1.length == 1) {
                                            //     console.log(this.state.value1)
                                            //     let k = this.state.value1.slice()
                                            //     if (k[0] == item.id) {
                                            //         descuento = [item.porcentaje];
                                            //         console.log(descuento)
                                            //         return (
                                            //             <p> Este item tiene un descuento de {item.porcentaje} %</p>

                                            //         )
                                            //     }
                                            // } else {
                                            //     console.log(this.state.value1)
                                            if (this.state.value1[producto] == item.serial) {

                                                descuento[producto] = item.porcentaje
                                                console.log(descuento)
                                                return (
                                                    <p> Este item tiene un descuento de {item.porcentaje} %</p>
                                                )
                                            } else {
                                                descuento[producto] = 0
                                                console.log(descuento)
                                            }
                                        }
                                        )
                                        }
                                    </div>
                                </div>
                            )
                        })}

                    </Form.Item>

                    <Form.Item label={this.props.title4}>
                        <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChangeEmpleado}>
                            <option value = "">
                                seleccione
                            </option>
                            {this.props.dataNominaDetallada.map(item =>
                                <option value={item.id}>{item.cedula}</option>)}
                        </select>
                    </Form.Item>

                    <Form.Item label={this.props.title5}>


                        <div>
                            <h1> Descuento: </h1>
                            <select defaultValue="Select" style={{ width: 120 }} onChange={this._handleChangeDescuento}>
                                    <option value=''>seleccionar</option>
                                {this.props.dataDescuento.map(item =>
                                    <option value={item.id}>{item.tipoDescuento}</option>)}
                            </select>
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" onClick={this.NewProducto.bind(this)} >añadir</Button>
                    </Form.Item>

                    <div>
                        <h1>precio:</h1>
                        <h1>${this.state.precio}</h1>
                    </div>

                    <Form.Item>
                        <Checkbox onChange={this.delivery}>
                            Delivery
                                    </Checkbox>


                        {this.state.delivery ?
                            <Input name='direction' placeholder='coloque su direccion' id='direccion'>

                            </Input> : null
                        }
                    </Form.Item>


                    <Form.Item>

                        <Button type="primary" onClick={this.NewPago.bind(this)} >añadir pago</Button>
                        {this.state.pagos.map(pago => {
                            console.log(pago)
                            return (
                                <div>
                                    <Input type='number' name='direction' placeholder='ingrese la cantidad de este pago' id='direccion' rules="" onChange={(event) => this.montos(event, pago)}>

                                    </Input>

                                    <select style={{ width: 120 }} defaultValue="Select" onChange={(event) => this.pagos(event, pago)}>
                                        <option value =""> seleccione</option>
                                        <option value="TARJETA">tarjeta</option>
                                        <option value="EFECTIVO">efectivo</option>

                                    </select>
                                </div>
                            )
                        })}




                    </Form.Item>
                    <Button onClick={this.prueba}>prueba</Button>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" >{this.props.btnText}</Button>
                    </Form.Item>

                </Form>
            </div>
        );
    }
}
export default FormCarrito