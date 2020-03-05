import React from 'react';
import { Form, Input, Button} from 'antd';
import axios from 'axios';
import { InputNumber, Checkbox } from 'antd';

var maxVentas;

class StockForm extends React.Component {
    
    onChange1= e => this.setState({e},console.log(e.target.checked)) 

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
      

    handleFormSubmit = (event, requestType, departmentID) => {
                event.preventDefault();
                
                var name = event.target.elements.name.value;
                var dispo = this.state.e.target.checked;
                var data = {
                        "departmentname": name,
                        "available": dispo,
                }
                if(requestType="post"){
                    
                    return axios.post('http://127.0.0.1:8000/api/nominaDept/', data)
                        .then(res => console.log(res), alert("Se ha guardado exitosamente en la base de datos"))
                        .catch(error => console.error(error));
                }   
                if(requestType="put"){
                return axios.put(`http://127.0.0.1:8000/api/nominaDept/${departmentID}/`, data) 
                    .then(res => console.log(res))
                    .catch(error => console.log(error));
                }
        
    }

    render() {
        const {dataProductos} = this.props
        const {dataStock} = this.props
        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(event,
                    this.props.stockID, 
                    )}>

                    <Form.Item label={this.props.title1} >
                    <Input name={this.props.dato1} placeholder={"Ingrese " + this.props.dato1 }/>
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
export default StockForm;