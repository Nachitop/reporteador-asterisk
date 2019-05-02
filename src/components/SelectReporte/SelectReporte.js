import React,{Component} from 'react';
import '../../Css/Global.css';
class SelectReporte extends Component{

    render(){
        return(
            <div>
                <div className="form-group">
                <label className="label-input">Type of report</label>
                <select className="form-control form-control-lg" name="reporte" id="reporte" onChange={this.props.handleOnChangeReporte}>
                    <option value="">Select an option</option>
                    <option value="all">Get all records</option>
                    <option value="calldate">By date</option>
                    <option value="src">By source</option>
                    <option value="dst">By destination</option>
                    <option value="duration">By duration </option>
                    <option value="userfield">By userfield</option>
                </select>
                </div>
            </div>

        );
    }
}

export default SelectReporte;