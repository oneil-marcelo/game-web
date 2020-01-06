import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

import './style.css';

export default function Header (props) {

    return (
        <header>
            <Link to="/gameweb">
                <img src={ logo } alt="Game Web" />
            </Link>
        </header>
    );
}