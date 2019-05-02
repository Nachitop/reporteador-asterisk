import React, {Component} from 'react';

class Calldate extends Component{

    render(){
        return(

            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="label-input">From</label>
                        <input className="form-control form-control-lg" id="desde" name="desde" type="date"  autoFocus={this.props.desde.isFocused} value={this.props.desde.value} onChange={this.props.handleOnChangeInput}></input>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group"><label className="label-input">To</label>
                        <input className="form-control form-control-lg" id="hasta" name="hasta" type="date" autoFocus={this.props.hasta.isFocused} value={this.props.hasta.value} onChange={this.props.handleOnChangeInput}></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calldate;