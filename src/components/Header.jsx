import TrollFace from '../images/troll-face.png'

function Header () {
    return(
        <header>
            <div className='logo-cont'>
                <img src={TrollFace} alt="Troll Face Logo" />
                <p>Meme Generator</p>
            </div>
            <p>React Course - Project 3</p>
        </header>
    )
}

export default Header