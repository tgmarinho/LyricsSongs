import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types';
import { Spin } from "antd";

const InputSearch = ({ handleSearch, isLoading }) => (

    <Fragment>
       
            <div className="group">
                <input  onKeyUp={handleSearch} className="" type="text" name="search" required="required" />
                <label for="search" className="">Musica</label>
                <div className="bar"></div>
            </div>

           {/* <Spin size="large" tip="Buscando..." hidden={isLoading} /> */}
      
    </Fragment>
)

InputSearch.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default InputSearch
