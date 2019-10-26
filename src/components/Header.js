import React, { Component } from 'react'; 
import '../App.css';

import Logo from '../assets/logo';

class Header extends Component {
    render() {
        return (
            <div className="header">               
                <Logo />                
                <p>Meu perfil</p>
            </div> 
        )         
    }
}

export default Header;