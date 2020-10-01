import React from 'react';
import {NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = (props) => {
    return (
        <header className="header">
            <div>
            <Navbar className="bgColor" variant="dark" expand="lg">
                <Navbar.Brand className="navBrand" href="#home">KIA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-auto">
                        <Nav.Link className="navColor" href="#home">Home</Nav.Link>
                        <Nav.Link className="navColor"href="#link">Services</Nav.Link>
                        <Nav.Link className="navColor"href="#link">Models</Nav.Link>
                        <Nav.Link className="navColor"href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
            <div className="container langArea">
                <div className="row">
                <NavLink to={'/cars_ru'} className=" col-xs-6 text-center langBtn">На Русском</NavLink>
                <NavLink to={'/cars_eng'} className="col-xs-6 text-center langBtn">In English</NavLink>
            </div>
            </div>
            </header>
    );
};

export default Header;
