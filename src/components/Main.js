import React, { Fragment } from 'react'
// import { Input } from "antd";

// const { TextArea } = Input;

const Main = ({ lyric, hiddenTextArea, imgArtist, name, artist, urlToVagalume }) => {

    return (
        <Fragment>
            <main className="container">
                <div className="container-inner">
                    {/* <div id="album-info" className="album-info" > */}
                        {/* <textarea className="album-info" rows="25" cols="40" readonly value={lyrics}/> */}
                       <h3>{name}</h3>
                       <br />
                        {/* <TextArea className="album-info"
                         style={{ backgroundColor : "#1d2028", color: "white" }}
                            autosize
                            value={lyric}
                            hidden={hiddenTextArea}
                        /> */}


                    {/* </div> */}

                    <div id="album-tracks" className="album-musics" >
                        <img src={imgArtist} height={200} width={200} hidden={hiddenTextArea}></img>
                        <p>{artist}</p>
                        <p>{name}</p>
                        <p>{urlToVagalume}</p>
                        <p>{}</p>
                    </div>
                </div>
            </main>
        </Fragment>
    )

}

export default Main