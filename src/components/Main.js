import React, { Fragment } from 'react'
import { Input } from "antd";

const { TextArea } = Input;

const Main = ({ lyrics }) => {

    return (
        <Fragment>
            <main className="container">
                <div className="container-inner">
                    {/* <div id="album-info" className="album-info" > */}
                        {/* <textarea className="album-info" rows="25" cols="40" readonly value={lyrics}/> */}
                        <TextArea className="album-info"
                         style={{ backgroundColor : "#1d2028", color: "white" }}
                            // hidden={this.state.hiddenTextArea}
                            autosize
                            value={lyrics}
                        />


                    {/* </div> */}

                    <div id="album-tracks" className="album-musics" >
                        {/* {lyrics} */}
                        Foto do album
                    </div>
                </div>
            </main>
        </Fragment>
    )

}

export default Main