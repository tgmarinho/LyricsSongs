import React, { Fragment, Component } from 'react';
import './App.css';

import { getLyricsByPiece, getImgArtistic } from "./api/getLyrics";
import AppContent from './AppContent';


class App extends Component {

  state = {
    search: "",
    lyric: "",
    artist: "",
    name: "",
    urlToVagalume: "",
    imgArtist: null,
    isLoading: true,
    hiddenTextArea: true
  };

  


  handleSearch = event => {

    const keyCode = event.which || event.keyCode
    const ENTER = 13;
    this.setState({ hiddenTextArea: true });
    if (keyCode === ENTER) {
      const search = event.target.value;
      this.setState({ lyric: "" });
     
      // Não permitir ir na API para buscar uma palavra tão irrelevante com tres caracteres apenas
      // if (search.trim().length <= 3) {
      //   return;
      // }
      this.setState({ search });
      this.showLyrics();

    }


  };

  showLyrics = async () => {
    this.setState({ isLoading: false, hiddenTextArea: true });
    // const img = await getImgArtistic(123);
    const dataRec = await getLyricsByPiece(this.state.search);
    console.log(dataRec)
  
    this.setState({ isLoading: true, hiddenTextArea: false, 
       ...dataRec });
   
  };


  render() {
    return (
      <AppContent {...this.state}
        handleSearch={this.handleSearch}

      />
    );
  }
}

export default App;
