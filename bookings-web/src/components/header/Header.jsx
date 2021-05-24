import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';

const Header = () => (
    <header className={style.header}>
        <h1>.gitaways</h1>
        <Link to='/'>locations</Link>
    </header>
)

export default Header