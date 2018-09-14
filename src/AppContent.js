import React, { Fragment } from "react";
import Aside from "./components/Aside";
import Main from "./components/Main";

const AppContent = ({
  lyric,
  name,
  artist,
  urlToVagalume,
  imgArtist,
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
          lyric={lyric}
          imgArtist={imgArtist}
          name={name}
          artist={artist}
          urlToVagalume={urlToVagalume}
        />
      </div>
    </Fragment>
  );
};

export default AppContent;
