import React, {Component} from 'react';

class Table extends Component{

    render(){
        return(
         <div>
     <div className="form-group">
                        <div className="div-rows" >Número de registros encontrados: <label className="label-row">{this.props.data.length}</label></div>
                    </div>
                
                    <div className="table-responsive">
                     
            <table className="table table-bordered" style={styles.table}>
                <thead>
                    <tr style={styles.tr}>
                        <th>Fecha y hora</th>
                        <th>ID</th>
                        <th>Origen</th>
                        <th>Destino</th>
                        <th>Duración</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((row,index)=>(
                        <tr key={index} >
                        <td>{row.calldate}</td>
                        <td>{row.clid}</td>
                        <td>{row.src}</td>
                        <td>{row.dst}</td>
                        <td>{row.duration}</td>
                        <td>{row.disposition}</td>
                     
                        </tr>
                    ))}
                  

                </tbody>
            </table>
        </div>
                
         </div>
           
          
       
     
        

         );
    }
}
var styles={
    tr:{
        borderColor: '#FB7B47',
        border:'2px solid #FB7B47',
        color:'#FB7B47',
    },

 
   
}

export default Table;