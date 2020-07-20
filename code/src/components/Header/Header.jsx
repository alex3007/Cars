import React from 'react';
import cls from './Header.module.css';
import Auth from "./Auth/Auth";

const Header = (props) => {
    return (
        <header className={cls.header}>
            <p>Личный кабинет:</p>
            <div>
                <Auth/>
            </div>
        </header>
    );
};

export default Header;
