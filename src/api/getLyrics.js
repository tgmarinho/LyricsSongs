import axios from "axios";

// API Key do Vagalume
const key = "d71ab78da2cf594903123c5fd60a27fc";

const dataRec = {}

const getLyricsById = async id => {
  const queryById = `https://api.vagalume.com.br/search.php?musid=${id}&apikey=${key}`;

  return await axios
    .get(queryById)
    .then(data => {
      const lyric = data.data.mus[0].text;

      console.log('getLyricsById', data)
    
       const imgArtist =  getImgArtistic(data.data.art.id)
      // console.log('img ad', img)
      imgArtist.then(data => { dataRec.imgArtist = data})
      data.data.art.id
      dataRec.lyric = lyric
      dataRec.artist = data.data.art.name
      dataRec.name = data.data.mus[0].name
      dataRec.urlToVagalume = data.data.mus[0].url
      
      
      console.log(dataRec)



      return dataRec;
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
      console.log('getLyricsByPiece', data)
      let musicId = '';
      if(data.data.response.docs.length > 0) {
        musicId = data.data.response.docs[0].id 
      } 
     
      console.log('musicId', !!musicId)

      return !!musicId ? getLyricsById(musicId) : musicId;
    })
    .catch(error => {
      console.log("getLyricsByPiece", error);
    });
};

// TODO testar o codigo
export const getImgArtistic = async idArt => {
  
  const queryByIdArtist = `https://api.vagalume.com.br/image.php?bandID=${idArt}&apikey=${key}`;

  return await axios
    .get(queryByIdArtist)
    .then(data => {
      console.log('queryByIdArtist',data)
      const img_url = data.data.images[0].url;      
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