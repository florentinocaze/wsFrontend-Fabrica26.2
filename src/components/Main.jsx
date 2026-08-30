import MainImage from "../assets/main-image.jpg"

function Main() {
    return (
        <main className="flex flex-col justify-center items-center w-full h-screen border border-dark-grey">
            <img className="main-image absolute -z-1 w-screen h-screen" src={MainImage} />

            <div className="main-container w-4xl h-3/4 gap-16 flex flex-col text-center justify-center items-center rounded-sm bg-light-grey-3">
                <h1 className="text-white text-6xl font-extrabold text-shadow-sm text-shadow-orange">OVERWATCH HEROES</h1>
                
                <div className="overwatch-links flex flex-row gap-16">
                    <a className="p-4 bg-orange text-white text-xl font-extrabold text-shadow-md shadow-md rounded-sm hover:scale-105 transition-transform duration-300" href="https://overwatch.blizzard.com/" target="_blank" rel="noopener noreferrer">JOGUE OVERWATCH 2</a>
                    <a className="p-4 bg-orange text-white text-xl font-extrabold text-shadow-md shadow-md rounded-sm hover:scale-105 transition-transform duration-300" href="https://overwatch.fandom.com/wiki/Overwatch_2" target="_blank" rel="noopener noreferrer">OVERWATCH WIKI</a>
                </div>
            </div>
        </main>
    )
}

export default Main;