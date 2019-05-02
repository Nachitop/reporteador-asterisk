import React,{Component} from 'react';
import Select from '../Select/Select';
import SelectReporte from '../SelectReporte/SelectReporte';
import Table from '../Table/Table';
import '../../Css/Global.css';
import Calldate from '../Calldate/Calldate';
import Duration from '../Duration/Duration';
import Userfield from '../Userfield/Userfield';
import Common from '../Common/Common';

class Content extends Component{
    constructor(){
        super();

        this.state={
            sucursal: '',
            reporte: '',
            data: [],
            servidor:'',
            parametros:{
                desde:{
                    value:'',
                    isFocused:true
                },
                hasta:{
                    value:'',
                    isFocused:false
                },
               
                duration1:{
                    value:0,
                    isFocused:true
                },
                duration2:{
                    value:0,
                    isFocused:false
                },
                 userfield:'',
                src:'',
                dst:'',
             
            }
            
      
        };
     
        this.obtenerSucursalChange= this.obtenerSucursalChange.bind(this);
        this.handleOnChangeReporte= this.handleOnChangeReporte.bind(this);
        this.handleOnClick=this.handleOnClick.bind(this);
        this.handleOnChangeInput= this.handleOnChangeInput.bind(this);
     

    }
 
  
    handleOnChangeInput(e){
   
          let id=e.target.id;
          let value=e.target.value;
          let parametros_obj=this.state.parametros;
      
                if(id==="desde"){
                    parametros_obj.desde.value=value;
                    parametros_obj.desde.isFocused=true;
                    parametros_obj.hasta.isFocused=false;
               
                }else if(id==="hasta"){
                parametros_obj.hasta.value=value;
                parametros_obj.desde.isFocused=false;
                parametros_obj.hasta.isFocused=true;
                }


         
            else if(id==="duration1"){
             console.log("duration1");
                parametros_obj.duration1.value=value;
                parametros_obj.duration1.isFocused=true;
                parametros_obj.duration2.isFocused=false;
               
           
            }else if(id==="duration2"){
                console.log("duration2");
                 parametros_obj.duration2.value=value;
                 parametros_obj.duration2.isFocused=true;
                 parametros_obj.duration1.isFocused=false;
                
            }
    
            else if(id==="Source"){
             this.state.parametros.src=value;
            }else if(id==="Destination"){
             this.state.parametros.dst=value;
            }else if(id==="userfield"){
               this.state.parametros.userfield=value;
            }

       
           //if(this.state.reporte!=="src" && this.state.reporte!=="dst" && this.state.reporte!=="userfield"){
            this.setState({
                parametros:parametros_obj
            });
         //  }
          
     
    }

    handleOnClick(e){
        if(e.target.id==="generate"){
            this.setState({
                data:[]
            });
            this.generarReporte();
            
        }
    }

    generarReporte(){
    
        let peticion=this.state.servidor+"/index.php?"+"db="+this.state.sucursal+"&reporte="+this.state.reporte;
        let parametros="";
        if(this.state.reporte==="all"){
          
        }
        else if(this.state.reporte==="calldate"){
            parametros="&desde="+this.state.parametros.desde.value+"&hasta="+this.state.parametros.hasta.value;
        }else if(this.state.reporte==="src"){
            parametros="&src="+this.state.parametros.src;
        }else if(this.state.reporte==="dst"){
            parametros="&dst="+this.state.parametros.dst;
        }else if(this.state.reporte==="duration"){
            parametros="&duration1="+this.state.parametros.duration1.value+"&duration2="+this.state.parametros.duration2.value;
        }else if(this.state.reporte==="userfield"){
            parametros="&userfield="+this.state.parametros.userfield
        }
        peticion=peticion+parametros

        fetch(peticion).then((res)=>{
        
            if(res.status===200){
                return res.json();
            }
            
        }
        ).then(data=>{
      
           if(data!==undefined){
             this.setState({
                 data:data.body
             });
           }
                

        }).catch((error)=>console.error(error));
    }

   obtenerSucursalChange(e){
    let sucursal=e.target.value;
    
        this.setState({
            sucursal:sucursal,
       });
      

       let servidor="http://";
       if(sucursal==="matriz"){
           servidor =servidor+"192.168.1.68";
       }else if(sucursal==="sucursal1"){
           servidor=servidor+"192.168.1.69";
       }else if(sucursal==="sucural2"){
           servidor=servidor+"192.168.1.70";
       }else if(sucursal==="sucursal1-r"){
           servidor=servidor+"192.168.1.68";
       }
    
       this.setState({
           servidor:servidor
       });
    

  
   }

   handleOnChangeReporte(e){
            this.setState({
                reporte: e.target.value
            }); 
   }

 

   
    render(){
        console.log(this.state);
        let reporte=this.state.reporte;
      
    
        let Records=()=>{
            let table=null;
        if(this.state.data!==undefined && this.state.data.length>0){
           
             table= <Table data={this.state.data}></Table>;
        }else{
            table=null;
        }

        return table;
        };
    
    
      
      let  Inputs=()=>{
          
        let input=null;
            if(reporte==='all'){
            
            }else if(reporte==='calldate'){
               input=<Calldate handleOnChangeInput={this.handleOnChangeInput} desde={this.state.parametros.desde} hasta={this.state.parametros.hasta} ></Calldate>;
           
            }else if(reporte==='src'){
                input=<Common label="Source" branch={this.state.sucursal} servidor={this.state.servidor} handleOnChangeInput={this.handleOnChangeInput} selectedvalue1={this.state.parametros.src}></Common>;
    
            }else if(reporte==='dst'){
                input=<Common label="Destination" branch={this.state.sucursal} servidor={this.state.servidor} handleOnChangeInput={this.handleOnChangeInput} selectedvalue2={this.state.parametros.dst} ></Common>;
    
            }else if(reporte==='duration'){
                input=<Duration  handleOnChangeInput={this.handleOnChangeInput} duration1={this.state.parametros.duration1}   duration2={this.state.parametros.duration2}></Duration>;
    
            }else if(reporte==='userfield'){
                input=<Userfield  branch={this.state.sucursal} servidor={this.state.servidor} handleOnChangeInput={this.handleOnChangeInput} selectedvalue={this.state.parametros.userfield}></Userfield>;
            }
  
        return input;
    
    }
   
   
   
        return(
            <div className="container">
            <br></br>
            <br></br>
            <div className="row">
            <div className="col-md-6">
            <Select obtenerSucursalChange={this.obtenerSucursalChange}></Select>
            </div>
            <div className="col-md-6">
            {this.state.sucursal!==''? <SelectReporte handleOnChangeReporte={this.handleOnChangeReporte}></SelectReporte> : null}
            
            </div>
            
            </div>
            <br></br>
            <br></br>
            <div className="row">
            <div className="col-md-12">
          
                <Inputs></Inputs>
               
                
            </div>
        
            </div>
            <br></br>
            <br></br>
            <div className="row">
            <div className="col-md-12 form-group">
            <button type="button" id="generate" name="generate" style={styles.boton} className="btn  btn-block btn-lg" disabled={(this.state.sucursal==='' || this.state.reporte==='')} onClick={this.handleOnClick}>Generate report</button>
            </div>
              
            </div>

            <br></br>
            <br></br>
            <div className="row">
            <div className="col-md-12 form-group">
            <Records></Records>
            {/* <Table data={this.state.data}></Table>; */}
             {/* {this.records} */}
            </div>
            </div>
               
            </div>
        );
    };
    
}
var styles={
    boton:{
        borderColor: '#FB7B47',
        border:'2px solid #FB7B47',
        color:'#FB7B47',
    }
   
}

export default Content;