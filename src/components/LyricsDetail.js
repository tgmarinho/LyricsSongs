import React, { Fragment } from 'react'

const LyricsDetail = ({imgArtist, hiddenTextArea, artist, name, urlToVagalume}) => {

    return (
        <Fragment>

            <div id="album-tracks" className="album-musics" >
                <img src={imgArtist} height={200} width={200} hidden={hiddenTextArea}></img>
                <p>{artist}</p>
                <p>{name}</p>
                <p>{urlToVagalume}</p>
                <p>{}</p>
            </div>

        </Fragment>
    )

}

export default LyricsDetail