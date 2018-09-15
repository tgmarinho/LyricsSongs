import React, { Fragment } from "react";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InputSearch from "./components/InputSearch";
import LyricsDetail from "./components/LyricsDetail";
import Lyrics from "./components/Lyrics";

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
      <Header />
      <InputSearch />
      <section className="lyricsContent">
        <div className="container">
          <Lyrics className="lyricsContent-items" />
          <LyricsDetail className="lyricsContent-items" />
        </div>
      </section>

      {/* <Aside isLoading={isLoading} handleSearch={handleSearch} /> */}

      {/* <Main
        hiddenTextArea={hiddenTextArea}
        lyric={lyric}
        imgArtist={imgArtist}
        name={name}
        artist={artist}
        urlToVagalume={urlToVagalume}
      /> */}

      <Footer />
    </Fragment>
  );
};

export default AppContent;
