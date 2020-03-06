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
            <a href="http://127.0.0.1:8000/query/chill">Query1</a>
            <a href="http://127.0.0.1:8000/query/recomendaciones">Query2</a>
            <a href="http://127.0.0.1:8000/query/productos-top">Query4</a>
            <a href="http://127.0.0.1:8000/query/productos-vendidos">Query5</a>
            <a href="http://127.0.0.1:8000/query/empleado-mes">Query6</a>
            <a href="http://127.0.0.1:8000/query/empleado-mejores-pagados">Query7</a>
            <a href="http://127.0.0.1:8000/query/empleado-juan">Query8</a>
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