import React, { useState } from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import {Avatar, Tooltip} from "@material-ui/core";

function Header() {
  const [searchQuery, setSearchQuery] =  useState("")
  return (
    <div className='header'>
        <img 
            className="header_icon"
            src="logo 1.PNG"
            alt=""
        />


        <div className='header_center'>
        <Tooltip title="Search holiday home worldwide" placement="top-end" >
        <input type="text" value={searchQuery} onChange={(event)=>setSearchQuery(event.target.value)} />
        </Tooltip>
        <SearchIcon />
        </div>

        <div className='header_right'>
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
        </div>
    </div>
  )
}

export default Header