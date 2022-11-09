import React, { useState } from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import {Avatar, Button, Tooltip} from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] =  useState("")
  return (
    <div className='header'>
      <Link to="/">
        <img 
            className="header_icon"
            src="logo 1.PNG"
            alt=""
        />
      </Link>

        <div className='header_center'>
        <Tooltip title="Search holiday home worldwide" placement="top-end" >
        <input type="text" value={searchQuery} onChange={(event)=>setSearchQuery(event.target.value)} />
        </Tooltip>
        <SearchIcon />
        </div>

        <div className='header_right'>
            <Button onClick={() => navigate('./search')}>Become a host</Button>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Link to="/loginform"><Avatar />
            Log in
            </Link>
        </div>
    </div>
  )
}

export default Header