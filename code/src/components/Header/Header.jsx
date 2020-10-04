import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link, animateScroll as scroll} from "react-scroll";

const Header = (props) => {

    return (
        <Navbar className="bgColor" variant="dark" expand="lg">
            <Navbar.Brand className="navBrand" href="#">KIA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-auto">
                    <Link className="navLink"
                          activeClass="activeLink"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          to="home">{props.lang === 'ru' ? 'Главная' : 'Home'}
                    </Link>
                    <Link className="navLink"
                          activeClass="activeLink"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          to="services">{props.lang === 'ru' ? 'Услуги' : 'Services'}
                    </Link>
                    <Link className="navLink"
                          activeClass="activeLink"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          to="models">{props.lang === 'ru' ? 'Модели' : 'Models'}
                    </Link>
                    <Link className="navLink"
                          activeClass="activeLink"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}

                          to="contact">{props.lang === 'ru' ? 'Контакты' : 'Contact'}
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
};

export default Header;
