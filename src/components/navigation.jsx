import React from "react";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from '../assets/logo-mpm.jpg'

export default function navigation() {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg"  style={{position:'fixed', zIndex:999, width:'100%', paddingLeft:'8%', 
            paddingRight:'9%', backgroundColor:'#182538'}}>
                <Navbar.Brand href="#home" >
                    <Link to='/'>
                    <img src={Logo} alt="logo" style={{height:50, width:130, borderRadius:10}}/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='w-100 d-flex justify-content-end'>
                        <Nav.Link href="#footer" style={{color:'white'}}>Chi siamo</Nav.Link>
                        <Nav.Link eventKey={2} href="#footer" style={{color:'white'}}>Contatti</Nav.Link>
                        <Nav.Link eventKey={2} href="https://drive.google.com/drive/folders/1D9PVSFqLLjPKexK3QSTnfkjUUZ2UJORa?usp=sharing"
                                  target="_blank" rel="noopener noreferrer"
                                  style={{color:'white'}}>Educational
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
}
