import React from "react"

export default function Main(props) {
    const styles = {
        backgroundColor: props.darkMode ? "" : "#3c096c"
    }

    const [memeImage, setMemeImage] = React.useState({
        top: "",
        bottom: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    
    const [memes, setMemes] = React.useState([])

    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemes(data.data.memes))
    
    
    
    function changeImage() {
        const url = memes[Math.floor(Math.random() * memes.length)].url
        setMemeImage(prevMemeImage => ({
            ...prevMemeImage,
            randomImage: url
        }))
    }
    
    function monitorInput(event) {
        const {name, value} = event.target

        setMemeImage(prevIm => ({
            ...prevIm,
            [name]: value
        }))
    }


    return (
        <div className="main--container" style={styles}>
            <div className="container">
                <div className="input--section">
                    
                    <input 
                    name="top"
                    value={memeImage.top}
                    onChange={monitorInput}
                    className="input"
                    />

                    <input 
                    name="bottom"
                    value={memeImage.bottom}
                    onChange={monitorInput}
                    className="input"
                    />

                </div>
                <button onClick={changeImage} className="button">Get a new meme Image 🖼️</button>
                <div className="meme--image--section">
                    <h1 className="top--text">{memeImage.top}</h1>
                    <img src={memeImage.randomImage} className="meme--image"/>
                    <h1 className="bottom--text">{memeImage.bottom}</h1>
                </div>
            </div>

        </div>
    )
}