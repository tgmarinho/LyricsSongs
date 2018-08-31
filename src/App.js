import React, { Fragment, Component } from 'react';
import './App.css';

import { getLyricsByPiece } from "./api/getLyrics";
import AppContent from './AppContent';


class App extends Component {

  state = {
    search: "",
    lyrics: "",
    isLoading: true,
    hiddenTextArea: true
  };


  handleSearch = event => {


    const value = event.target.value;
    const keyCode = event.which || event.keyCode
    const ENTER = 13;

    if (keyCode === ENTER) {
      const search = event.target.value;
      this.setState({ lyrics: "" });
      this.setState({ hiddenTextArea: true });
      // Não permitir ir na API para buscar uma palavra tão irrelevante com quatro caracteres apenas
      // if (search.length <= 4 || search.trim() === "") {
      //   return;
      // }
      this.setState({ search });
      this.showLyrics();

    }


  };

  showLyrics = async () => {
    this.setState({ loading: false });
    this.setState({ hiddenTextArea: true });
    const lyrics = await getLyricsByPiece(this.state.search);
    console.log(lyrics)
    this.setState({ loading: true });
    this.setState({ hiddenTextArea: false });
    this.setState({ lyrics });
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
