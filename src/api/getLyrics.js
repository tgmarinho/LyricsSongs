import axios from "axios";

// API Key do Vagalume
const key = "d71ab78da2cf594903123c5fd60a27fc";

const dataRec = {}

const getLyricsById = async id => {
  const queryById = `https://api.vagalume.com.br/search.php?musid=${id}&apikey=${key}`;

  return await axios
    .get(queryById)
    .then(data => {
      const gotLyric = data.data.mus[0].text;
      console.log("getLyricsById")
      console.log(data)
    //  const img =  getImgArtistic(data.data.art.id)

    //   console.log('img ad', img)
    //   img.then(data => console.log('img_url',data))

      return gotLyric;
    })
    .catch(error => {
      console.log("error_getLyricsById", error);
    });
};

export const getLyricsByPiece = async piece => {
  const queryByPiece = `https://api.vagalume.com.br/search.excerpt?q=${piece}&extra=relmus&apikey=${key}`;

  return await axios
    .get(queryByPiece)
    .then(data => {
      console.log(data)
      const musicId = data.data.response.docs[0].id;
      return getLyricsById(musicId);
    })
    .catch(error => {
      console.log("getLyricsByPiece", error);
    });
};


export const getImgArtistic = async idArt => {
  
  
  const queryByIdArtist = `https://api.vagalume.com.br/image.php?bandID=3ade68b3gdb86eda3`;

  return await axios
    .get(queryByIdArtist)
    .then(data => {
      const img_url = data.data.response.images[0].url;
      console.log(img_url)
      return img_url;
    })
    .catch(error => {
      console.log("getImgArtistic", error);
    });
};


// // Exemplo de requisição
// var artist = "3ade68b3gdb86eda3";
// var song   = 10;
// jQuery.getJSON(
//     "https://api.vagalume.com.br/image.php"
//         + "?bandID=" + artist
//         + "&limit=" + limit
//         + "&apikey={key}",
//     function (data) {
//         // URL da imagem
//         alert(data.images[0].url);
//     }
// );