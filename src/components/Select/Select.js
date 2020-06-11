import React, {Component} from 'react';

class Select extends Component{
    render(){
        return(
           <div>
            
               <div className="form-group">
               <label className="label-input" >Branch office</label>
               <select name ="sucursal" className="form-control form-control-lg" id="sucursal" onChange={this.props.obtenerSucursalChange}>
               <option value="">Select an option</option>
               <option value="matriz">Matriz</option>
               <option value="sucursal1">Sucursal1</option>
               <option value="sucursal2-r">Sucursal2 Replicada</option>
               <option value="sucursal2">Sucursal2</option>
               </select>
               </div>
             
           </div>
        );
    }
}

export default Select;