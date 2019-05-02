import React, {Component} from 'react';

class Common extends Component{
    constructor(){
        super();

        this.state={
            title: '',
            data:[]
        }
    }
 

    componentDidMount(){
        this.obtenerDatos();
     
    }
    obtenerDatos(){
        let db= this.props.branch;
        let peticion;
        let cmn;

    
        if(this.props.label==="Source"){
            cmn="src";
        }else{
            cmn="dst";
        }
    
        peticion=this.props.servidor+"/index.php?db="+db+"&common="+cmn;
    
        fetch(peticion).then((res)=>{
           if(res.status===200){
            return res.json();
           }
            
        
        }).then((data)=>{
            if(data!==undefined){
            this.setState({
                title: this.props.label,
                data:data.body
            
            });
        }
            
        });
  
      
    }
    render(){

   

        return(
            <div className="row">
            <div className="col-md-12">
            <div className="form-group">
                     <label className="label-input">{this.state.title}</label>
                 
                     <select className="form-control form-control-lg" id={this.state.title} name={this.state.title} onChange={this.props.handleOnChangeInput}>
                        <option value="">Select an option</option>
                        
                        {this.state.data.map((cmn,index)=>(
                           
                                <option key={index} value={cmn.src || cmn.dst}>{cmn.src || cmn.dst}</option>
                           
                        ))}
                    </select>
                    <br></br>
                        <br></br>
                        {this.props.selectedvalue1!=='' && this.props.selectedvalue2!==''? 
                      
                            <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label-input">Selected Value: </label>
                                    {this.props.selectedvalue1!==''?<label className="label-left">{this.props.selectedvalue1}</label> : null}
                                    {this.props.selectedvalue2!==''?<label className="label-left">{this.props.selectedvalue2}</label> : null}

                               </div> 
                            </div> 
                            </div>
                            
                         
                             : null}
                </div>
            </div>
               
            </div>
        );
    };
}

export default Common;