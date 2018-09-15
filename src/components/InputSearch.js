import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types';
import SearchInput from './searchInput/SearchInput';

const InputSearch = ({ handleSearch, isLoading }) =>  (
<section className="container">
<SearchInput />
</section>
)


InputSearch.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default InputSearch
