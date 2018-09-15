import React, { Fragment } from 'react'
import './SearchInput.css'

const SearchInput = (props) => {

    return (
        <Fragment>
            <div className="searchGroup">
                <input className="searchInput" type="text" name="search" required="required" {...props} />
                <label for="search" className="searchLabel">Pesquisar</label>
                <div className="searchBar"></div>
            </div>

        </Fragment>
    )

}

export default SearchInput