import MainImage from "../assets/main-image.jpg"

function Main() {
    return (
        <main>
            <img className="main-image" src={MainImage} />

            <div className="main-container">
                <h1>OVERWATCH HEROES</h1>
                
                <div className="overwatch-links">
                    <a href="https://overwatch.blizzard.com/" target="_blank" rel="noopener noreferrer">JOGUE OVERWATCH 2</a>
                    <a href="https://overwatch.fandom.com/wiki/Overwatch_2" target="_blank" rel="noopener noreferrer">OVERWATCH WIKI</a>
                </div>
            </div>
        </main>
    )
}

export default Main;