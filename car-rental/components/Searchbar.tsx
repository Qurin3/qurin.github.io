"use client";
import React from 'react'
import { useState } from 'react';
import { SearchManufacturer } from '.';

const Searchbar = () => {
    const [manufacturer, setManufacturer] = useState("");
    const handleSearch = () => {

    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer
            manufacturer={manufacturer}
            
            />
        </div>
    </form>
  )
}

export default Searchbar