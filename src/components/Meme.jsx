import memeData from "../memesData"

function Meme () {
    function logMeme () {
        let memesArr = memeData.data.memes;
        let randomMeme = memesArr[Math.floor(Math.random() * memesArr.length)]
        console.log(randomMeme)
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
            </form>
        </div>
    ) 
}

export default Meme