import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-scroll";
import LanguageSwitch from "./LanguageSwitch/LanguageSwitch";

const Header = (props) => {

    let navLinks = [
        {path: "home", ruName: "Главная", enName: "Home"},
        {path: "models", ruName: "Главная", enName: "Models"},
        {path: "services", ruName: "Услуги", enName: "Services"},
        {path: "contacts", ruName: "Контакты", enName: "Contacts"},
    ]
    return (
        <header className="header">
            <Navbar className="bgColor" variant="dark" expand="lg">
                <Navbar.Brand className="navBrand" href="#">KIA</Navbar.Brand>
                <div className="toggle">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-auto">
                        {navLinks.map(e => <Link className="navLink"
                                                 activeClass="activeLink"
                                                 spy={true}
                                                 smooth={true}
                                                 offset={-70}
                                                 duration={500}
                                                 to={e.path}>{props.lang === 'ru' ? e.ruName : e.enName}
                            </Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <LanguageSwitch {...props}/>
        </header>

    )
};

export default Header;
