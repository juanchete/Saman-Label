import React from 'react';
import axios from 'axios';
import FormTarjetas from '../components/FormTarjetas'
import Tarjetas from '../components/Tarjetas';

class TarjetasList extends React.Component {

    state = {
         tarjetas: []
     }

        componentDidMount(){
            // Promise.all([
            //     axios.get('http://127.0.0.1:8000/api/nominaDept/'),
            //     axios.get('http://127.0.0.1:8000/api/categorias/')
            //   ]).then(([productos1, categorias1]) => {
            //     // do something with both responses
            //     this.setState({
            //         productos: productos1.data,
            //         categorias: categorias1.data
            //     })
            //   })};

        axios.get('http://127.0.0.1:8000/api/tarjetas/')
        .then(res =>{
            this.setState({
                tarjetas: res.data
            });
            console.log(res.data);
        })
        
     }

            
    render(){

        return(
    <div>
    <Tarjetas data={this.state.tarjetas} link="tarjetas"/>
    <br></br>
    <h2>Registrar tarjetas</h2>
    <FormTarjetas
    requestType="post"
    tarjetasID={null}
    dataTarjetas={this.state.tarjetas}
    btnText="Create"
    title1="Ingrese nro de cedula"
    title2="Ingrese nro de la tarjeta"
    title3="Ingrese el CVV"
    title4="Ingrese id del recibo"
    title5="Ingrese el banco "
    title6="Ingrese la fecha de vencimiento"/>
    </div>
        )
    }
}

export default TarjetasList;