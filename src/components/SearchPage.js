import { Button } from '@material-ui/core';
import React from 'react'
import '../styles/SearchPage.css';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage-info">
                <p>62 stays - 26 aug to 30 - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>Cancellation flexibility</Button>
                <Button variant='outlined'>Type of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and beds</Button>
                <Button variant='outlined'>Type of place</Button>
                <Button variant='outlined'>More filters</Button>

                <SearchResult src="https://images.unsplash.com/photo-1569377750206-a249f7b5556f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                title="Spacious Vander House"
                location="Private room in center of London"
                description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - Wifi - kitchen - free parking - Washing Machine" 
                star={4.73} price=" 30 / night" total=" 117 total"
                />
                
                <SearchResult src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
                title="Spacious Vander House"
                location="Private room in center of London"
                description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - Wifi - kitchen - free parking - Washing Machine" 
                star={4.73} price=" 30 / night" total=" 117 total"
                />
                <SearchResult src="https://images.unsplash.com/photo-1597308011529-f634f4cab827?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                title="Spacious Vander House"
                location="Private room in center of London"
                description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - Wifi - kitchen - free parking - Washing Machine" 
                star={4.73} price=" 30 / night" total=" 117 total"
                />
                <SearchResult src="https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                title="Spacious Vander House"
                location="Private room in center of London"
                description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - Wifi - kitchen - free parking - Washing Machine" 
                star={4.73} price=" 30 / night" total=" 117 total"
                />
            </div>
        </div>
    )
}

export default SearchPage
