import React,{Component} from 'react';
import Table from '../Table/Table';
import '../../Css/Global.css';


class Content extends Component{
    constructor(){
        super();

        this.state={
            db: '',
            servidor:'',
            data: [],
            parametros:{
              desde:'',
              hasta:'',
              origen:'',
              destino:''
            }
        };
        this.obtenerSucursalChange= this.obtenerSucursalChange.bind(this);
        this.obtenerFechaChange= this.obtenerFechaChange.bind(this);
        this.obtenerExtensionesChange= this.obtenerExtensionesChange.bind(this);
        this.generarReporte=this.generarReporte.bind(this);

    }

    obtenerSucursalChange(e){
        let db=e.target.value;
           let servidor="http://";
           if(db==="matriz"){
               servidor =servidor+"192.168.43.6";
           }else if(db==="sucursal1"){
               servidor=servidor+"192.168.43.75";
           }else if(db==="sucursal2"){
               servidor=servidor+"192.168.43.7";
           }else if(db==="sucursal2-r"){
               servidor=servidor+"192.168.43.6";
               db="sucursal2";
           }
           this.setState({
               db:db,
               servidor:servidor
           });
       }


       obtenerFechaChange(e){

        var parametros= this.state.parametros;

           if(e.target.id==='desde'){
               parametros.desde=e.target.value;
           }
           else{
               parametros.hasta=e.target.value;
           }
            this.setState({
                parametros:parametros
            })
       }

       obtenerExtensionesChange(e){
           var parametros= this.state.parametros;
            if(e.target.id==="origen"){
                parametros.origen=e.target.value;
            }else{
                parametros.destino=e.target.value;
            }
       }
  

    generarReporte(){
        console.log(this.state);
   
        let peticion=this.state.servidor+"/index.php?"+"db="+this.state.db+"&desde="+this.state.parametros.desde+"&hasta="+this.state.parametros.hasta;
        if(this.state.parametros.origen!==""){
            peticion= peticion+"&origen="+this.state.parametros.origen;
        }
        if(this.state.parametros.destino!==""){
            peticion= peticion+"&destino="+this.state.parametros.destino;
        }

        fetch(peticion).then((res)=>{
            if(res.status===200){
                return res.json();
            }
        }
        ).then(data=>{
            console.log(data);
           if(data!==undefined){
             this.setState({
                 data:data.body
             });
           }else{
               this.setState({
                   data:[]
               })
           }
        }).catch((error)=>console.error(error));
    }


   
    render(){
     
       // console.log(this.state);
        let Records=()=>{
            let table=null;
        if(this.state.data!==undefined && this.state.data.length>0){
           
             table= <Table data={this.state.data}></Table>;
        }else{
            table=null;
        }

        return table;
        };
    
    
      

   
   
   
        return(
            <div className="container">
            <br></br>
            <br></br>
            <div className="row">
                   
                 <div className="col-md-12">
                    <div className="form-group">
                    <label className="label-input" >Sucursal</label>
                    <select name ="sucursal" className="form-control form-control-lg" id="sucursal" onChange={this.obtenerSucursalChange}>
                         <option value="">Elija una opción</option>
                        <option value="matriz">Matriz</option>
                        <option value="sucursal1">Sucursal1</option>
                        <option value="sucursal2-r">Sucursal2 Replicada</option>
                        <option value="sucursal2">Sucursal2</option>
                    </select>
                    </div>
                    </div>   
                
            </div>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="label-input" >Desde</label>
                        <input className="form-control form-control-lg" id="desde" name="desde" type="date" onChange={this.obtenerFechaChange}></input>

                    </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                        <label className="label-input" >Hasta</label>
                        <input className="form-control form-control-lg" id="hasta" name="hasta" type="date" onChange={this.obtenerFechaChange}></input>

                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <label className="label-input" >Origen</label>
                            <input type="number" min="0" max="9999999999" id="origen" name="origen" className="form-control form-control-lg" onChange={this.obtenerExtensionesChange}></input>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="label-input" >Destino</label>
                            <input type="number" min="0" max="9999999999" id="destino" name="destino" className="form-control form-control-lg" onChange={this.obtenerExtensionesChange}></input>
                        </div>
                    </div>
                </div>
            <br></br>
            <br></br>
            <div className="row">
            <div className="col-md-12 form-group">
            <button type="button" id="generate" name="generate" style={styles.boton} className="btn  btn-block btn-lg" disabled={(this.state.db==='' || this.state.parametros.desde==='' || this.state.parametros.hasta==='')} onClick={this.generarReporte}>Generar reporte</button>
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