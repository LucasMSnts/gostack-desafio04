import React, { Component } from 'react'; 
import '../App.css';

import Logo from '../assets/logo';

class Header extends Component {
    render() {
        return (
            <header>               
                <Logo />
                <div>              
                    <p>Meu perfil</p>
                    <img src="https://i.pravatar.cc/150?img=11" alt="teste" />
                </div> 
            </header> 
        )         
    }
}

export default Header;