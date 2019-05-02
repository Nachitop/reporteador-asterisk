import React,{Component} from 'react';
import { error } from 'util';

class UserField extends Component{
    constructor(){
        super();

        this.state={
            data:[]
        }
    }

    componentDidMount(){
     
        fetch(this.props.servidor+"/index.php?db="+this.props.branch+"&userfieldarray=true").then(res=>{
            if(res.status===200){
                return res.json();
            }
         
        }).then(data=>{
       if(data!==undefined){
        this.setState({
            data:data.body
        });
       }
         
        }).catch((error)=>console.error(error));
      
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="label-input">UserField</label>
                        <select id="userfield" name="userfield" className="form-control form-control-lg" onChange={this.props.handleOnChangeInput}>
                        <option value="">Select an option</option>
                            {this.state.data.map((user,index,self)=>(
                                <option key={'userfiel'+index} value={user.userfield}>{user.userfield}</option>
                            ))}
                        </select>
                        <br></br>
                        <br></br>
                        {this.props.selectedvalue!==''? 
                      
                            <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label-input">Selected Value: </label><label className="label-left">{this.props.selectedvalue}</label>
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

export default UserField;