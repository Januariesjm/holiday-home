import React, { useState } from 'react';
import './Banner.css';
import {Button} from "@material-ui/core";
import Search from './Search';

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
    <div className='banner_search'>
      {showSearch && <Search />}
      <Button onClick={() =>setShowSearch(!showSearch)}
      className='banner_searchButton'
      variant='outlined'
      >Search Dates</Button>
    </div>
     <div className='banner_info'>
      <h1>Get out and discover new beautiful homes</h1>
      <h5>Travel across the world, explore new places you've never seen before</h5>
      <Button
        variant='outlined'>Explore new places
      </Button>
     </div>
    </div>
  )
}

export default Banner