import React from 'react';
import '../styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';  
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img className="header-logo" alt="logo" src="https://marcas-logos.net/wp-content/uploads/2020/03/Airbnb-logo.png" />
            
            </Link>
            <div className="header-center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header-right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )}

export default Header
