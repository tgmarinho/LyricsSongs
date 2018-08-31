import axios from "axios";

// API Key do Vagalume
const key = "d71ab78da2cf594903123c5fd60a27fc";

const getLyricsById = async id => {
  const queryById = `https://api.vagalume.com.br/search.php?musid=${id}&apikey=${key}`;

  return await axios
    .get(queryById)
    .then(data => {
      const gotLyric = data.data.mus[0].text;
      return gotLyric;
    })
    .catch(error => {
    //   console.log("error_getLyricsById", error);
    });
};

export const getLyricsByPiece = async piece => {
  const queryByPiece = `https://api.vagalume.com.br/search.excerpt?q=${piece}&extra=relmus&apikey=${key}`;

  return await axios
    .get(queryByPiece)
    .then(data => {
      const musicId = data.data.response.docs[0].id;
      return getLyricsById(musicId);
    })
    .catch(error => {
    //   console.log("error_getLyricsByTrecho", error);
    });
};