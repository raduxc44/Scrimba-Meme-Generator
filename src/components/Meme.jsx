import React from "react";
import memeData from "../memesData"

function Meme () {

    let [randomMeme, setRandomMeme] = React.useState('');

    function logMeme () {
        let memesArr = memeData.data.memes;
        let randomNumber = Math.floor(Math.random() * memesArr.length);
        setRandomMeme(memesArr[randomNumber].url)
    }
    
    

    return(
        <div className="Meme">
            <form action="">
                <div className="user-input">
                    <input type="text" placeholder="Shut up"/>
                    <input type="text" placeholder="and take my money"/>
                </div>
                <button type="button" onClick={logMeme} className="form--button">
                    Get a new meme image 🖼
                </button>
            <div className="meme-div">
                <img src={randomMeme} alt="Meme" className="meme" />
            </div>
            </form>
            
        </div>
    ) 
}

export default Meme