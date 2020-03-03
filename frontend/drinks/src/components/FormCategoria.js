import React from 'react';
import { Form, Input, Button} from 'antd';
import axios from 'axios';
import { Checkbox } from 'antd';
import CategoriaDetailView from '../containers/CategoriasDetailView';


class FormCategoria extends React.Component {
    
    state = {
        e : true
      }


    onChange1= e => this.setState({e}) 
        

    handleFormSubmit = (event,requestType,categoriaID) => {
        event.preventDefault();
                var name = event.target.elements.name.value;
                var available = this.state.e.target.checked;
                console.log(this.props.categoriaID)
                
        switch (requestType) {

            case "post":
                var data = {
                    "name": name,
                    "available":available
                }
                return axios.post('http://127.0.0.1:8000/api/categorias/', data)
                    .then(res => console.log(res))
                    .catch(error => console.error(error));
            
            case "put":
                data = {
                    "name": name,
                    "available":available
                }
                return axios.put(`http://127.0.0.1:8000/api/categorias/${this.props.categoriaID}/`, data) 
                .then(res => console.log(res))
                .catch(error => console.log(error));

        }
    }

    render() {

        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(event,
                    this.props.requestType,
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
export default FormCategoria;