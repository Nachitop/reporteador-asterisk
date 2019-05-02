import React, {Component} from 'react';

class Duration extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                         <label className="label-input">Min value</label>
                        <input className="form-control form-control-lg" autoFocus={this.props.duration1.isFocused} id="duration1" name="duration1" type="number" value={this.props.duration1.value} onChange={this.props.handleOnChangeInput}></input>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                    <label className="label-input">Max value</label>
                        <input className="form-control form-control-lg"  autoFocus={this.props.duration2.isFocused} id="duration2" name="duration2" type="number"value={this.props.duration2.value}  onChange={this.props.handleOnChangeInput}></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default Duration;