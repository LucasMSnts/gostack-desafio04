import React, { Component } from 'react'; 
import '../App.css';

import Logo from '../assets/logo';

class Header extends Component {
    render() {
        return (
            <header>               
                <Logo />                
                <p>Meu perfil</p>
            </header> 
        )         
    }
}

export default Header;