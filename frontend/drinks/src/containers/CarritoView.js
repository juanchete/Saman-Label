import React from 'react'
import axios from 'axios'
import FormCarrito from '../components/Carrito'

class CarritoView extends React.Component {
    
    state = {
        stock: [],
        productos: [],
        categorias: [],
        cliente: [],
        nominaDetallada:[],
        descuento:[],
        listaDescuento:[],
        factura: []
    }

        // componentDidMount(){
        //     Promise.all([
        //         axios.get('http://127.0.0.1:8000/api/productos/'),
        //         axios.get('http://127.0.0.1:8000/api/categorias/'),
        //         axios.get('http://127.0.0.1:8000/api/stock/'),
        //         axios.get('http://127.0.0.1:8000/api/cliente/')
        //       ]).then(([productos2, categorias2,stock2,cliente2]) => {
        
        //         this.setState({
        //             productos: productos2.data,
        //             categorias: categorias2.data,
        //             stock: stock2.data,
        //             cliente: cliente2.data
        //         })
        //       })};
        componentDidMount(){
            axios.get("http://127.0.0.1:8000/api/clientes/")
            .then(res =>{
                this.setState({
                    cliente: res.data
                });
            })
            axios.get("http://127.0.0.1:8000/api/productos/")
            .then(res =>{
                this.setState({
                    productos: res.data
                });
            })
            axios.get("http://127.0.0.1:8000/api/stock/")
            .then(res =>{
                this.setState({
                    stock: res.data
                });
            })
            axios.get("http://127.0.0.1:8000/api/categorias/")
            .then(res =>{
                this.setState({
                    categorias: res.data
                });
            })
            axios.get("http://127.0.0.1:8000/api/nominaDetallada/")
            .then(res =>{
                this.setState({
                    nominaDetallada: res.data
                });
            })
            axios.get("http://127.0.0.1:8000/api/descuento/")
            .then(res =>{
                this.setState({
                    descuento: res.data
                });
            })
            axios.get("http://127.0.0.1:8000/api/listaDescuento/")
            .then(res =>{
                this.setState({
                    listaDescuento: res.data
                });
            })
            axios.get("http://127.0.0.1:8000/api/factura/")
            .then(res =>{
                this.setState({
                    factura: res.data
                });
            })
        }

    render(){
        console.log(this.state.cliente)
        console.log(this.state.categorias)
        console.log(this.state.productos)
        console.log(this.state.stock)
        console.log(this.state.nominaDetallada)
        console.log(this.state.descuento)
        return(
    <div>
    <h2>Carrito</h2>
    {<FormCarrito
    // title1="Ingrese cedula del cliente"
    // title2="Eliga el producto"
    // title3="Ingrese la cantidad"
    // title4="Seleccione trabajador"
    // dato1="cedula"
    // dato2="serializador"
    // dato3="sell"
    // dato4="cedula"
    // title5="Seleccione descuento"
    // dato5="cedula"
    dataFactura={this.state.factura}
    dataCliente={this.state.cliente}
    dataCategorias={this.state.categorias}
    dataStock={this.state.stock}
    dataProductos={this.state.productos}
    dataNominaDetallada={this.state.nominaDetallada}
    dataDescuento={this.state.descuento}
    dataListaDescuento={this.state.listaDescuento}
    btnText="Comprar"/> }
    </div>
        )
    }
}
export default CarritoView;