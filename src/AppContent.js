import React, { Fragment } from "react";
import Aside from "./components/Aside";
import Main from "./components/Main";

const AppContent = ({
  search,
  lyrics,
  isLoading,
  hiddenTextArea,
  handleSearch
}) => {
  return (
    <Fragment>
      <div className="general">
        <Aside isLoading={isLoading} handleSearch={handleSearch} />

        <Main
          hiddenTextArea={hiddenTextArea}
          lyrics={lyrics}
          isLoading={isLoading}
        />
      </div>
    </Fragment>
  );
};

export default AppContent;
