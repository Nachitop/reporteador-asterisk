import React, {Component} from 'react';
import logo from '../../imgs/orange.png';
import './Header.css';

class Header extends Component{
    render(){
        return(
        <div className="navbar navbar-light bg-light header">
            <a className="navbar-brand">
            <img src={logo} className="logo d-inline-block align-top"></img>
            <label className="title">Orange Hotel</label>
            </a>
      
        </div>
        );
    }
}

export default Header;