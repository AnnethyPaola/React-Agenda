import React, {Component} from 'react'

class Listar extends Component {
    constructor() {
        super();
        this.state = { items: [] };
    }

    componentDidMount() {
        fetch('http://www.raydelto.org/agenda.php')
        .then(result=>result.json())
        .then(items=>this.setState({items}))
    }

    render() {
        return(
            <div className="container clearfix" >
                <table className="table  table-responsive-sm border table-hover ">
                <thead className="thead-white bg-danger .text-light">
                <tr>
                <th>Nombre</th> 
                <th>Apellido</th>
                <th> Telefono</th>
                </tr>
                
                 </thead>

                    {
                         this.state.items.map((item) =>{
                            return(
                               <tbody>
                               <tr className="text-light"><td>{item.nombre}</td><td> {item.apellido}</td><td> {item.telefono}</td></tr>
                               </tbody>
                            )
                        })
                    }
                   
                </table>

            </div>
        )
    }
}

export default Listar