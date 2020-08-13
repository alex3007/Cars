import React from 'react';
import cls from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={cls.header}>
                <NavLink to={'/cars_ru'} className={cls.langBtn}>На Русском</NavLink>
                <NavLink to={'/cars_eng'} className={cls.langBtn}>In English</NavLink>
        </header>
    );
};

export default Header;
