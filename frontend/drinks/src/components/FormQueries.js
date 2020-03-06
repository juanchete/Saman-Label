import React from 'react'

class FormQueries extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          value: 'a'
          
        }
      }

    render(){
    const {dataQuery}=this.props
    const {DataqueryRecomendaciones}=this.props
    const {DataqueryProductosTop}=this.props
    const {DataqueryProductosVendidos}=this.props
    const {DataqueryEmpleadoMes}=this.props
    const {DataqueryEmpleadosMejoresPagados}=this.props
    const {DataqueryJuan}=this.props
        return(
            <div>
                <h3>Query 1</h3>
            <a href="http://127.0.0.1:8000/query/chill">Query1</a>
            <p>Cuenta la cantidad de productos que hay en cada categoria</p>
            <h3>Query 2</h3>
            <a href="http://127.0.0.1:8000/query/recomendaciones">Query2</a>
            <p>Muestra los productos que estan en descuento</p>
            <h3>Query 3</h3>
            <a href="http://127.0.0.1:8000/query/productos-top">Query3</a>
            <p>Muestra los cinco productos mas vendidos</p>
            <h3>Query 4</h3>
            <a href="http://127.0.0.1:8000/query/productos-vendidos">Query4</a>
            <p>Muestra cuanto se ha vendido de cada producto</p>
            <h3>Query 5</h3>
            <a href="http://127.0.0.1:8000/query/empleado-mes">Query5</a>
            <p>Muestra los empleados con mas ventas
            </p>
            <h3>Query 6</h3>
            <a href="http://127.0.0.1:8000/query/empleado-mejores-pagados">Query6</a>
            <p>Los 5 empleados mejores pagados</p>
            <h3>Query 7</h3>
            <a href="http://127.0.0.1:8000/query/empleado-juan">Query7</a>
            <p>Muestra todos los empleados que los que empiecen con juan</p>
            </div>
            // Object.values(DataqueryProductosTop)
            // Object.values(dataQuery)
            // Object.values(dataQuery)
            // Object.values(DataqueryRecomendaciones)
            // {/* // <div>
            // // <ul>
            // //     <li>{Object.values(dataQuery)}</li>
            // //     <li>{Object.values(DataqueryRecomendaciones)}</li>
            // //     <li>{Object.values(DataqueryProductosTop)}</li>
            // //     <li>{Object.values(DataqueryProductosVendidos)}</li>
            // //     <li>{Object.values(DataqueryEmpleadoMes)}</li>
            // //     <li>{Object.values(DataqueryEmpleadosMejoresPagados)}</li>
            // //     <li>{Object.values(DataqueryJuan)}</li>
            // // </ul>
            // // </div> */}
        
            
        )

    
    }
    
    
    
   




}

export default FormQueries