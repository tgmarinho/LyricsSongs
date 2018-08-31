import React, { Fragment } from "react";
import InputSearch from "./InputSearch";

const FormSearch = ({ handleSearch, isLoading }) => {
  return (
    <Fragment>
      <form id="search-form" className="form-wrapper">
        <InputSearch handleSearch={handleSearch} isLoading={isLoading} />
      </form>
    </Fragment>
  );
};

export default FormSearch;
