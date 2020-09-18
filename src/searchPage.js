import React from 'react'
import './searchPage.css';

import TuneRoundedIcon from '@material-ui/icons/TuneRounded';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneRoundedIcon className="searchPage_filterIcon"/>
                <h4>FILTER</h4>
            </div>
            
            <hr/>

        </div>
    )
}

export default SearchPage
