import MainImage from "../assets/main-image.jpg"

function Main() {
    return (
        <main className="flex flex-col justify-center items-center w-full h-screen border-b border-dark-grey">
            <img className="main-image absolute -z-1 w-screen h-screen object-cover" src={MainImage} alt="Personagens do Overwatch 2" />

            <div className="main-container p-16 md:w-4xl md:h-3/4 gap-16 flex flex-col text-center justify-center items-center rounded-sm bg-light-grey-3">
                <h1 className="text-white text-4xl md:text-6xl font-extrabold text-shadow-sm text-shadow-orange">HERÓIS DO <br />OVERWATCH</h1>
                
                <div className="overwatch-links flex flex-col md:flex-row gap-16">
                    <a className="p-4 bg-orange text-white text-sm md:text-md lg:text-lg font-extrabold text-shadow-md shadow-md rounded-sm hover:scale-105 transition-transform duration-300" href="https://overwatch.blizzard.com/" target="_blank" rel="noopener noreferrer">JOGUE OVERWATCH 2</a>
                    <a className="p-4 bg-orange text-white text-sm md:text-md lg:text-lg font-extrabold text-shadow-md shadow-md rounded-sm hover:scale-105 transition-transform duration-300" href="https://overwatch.fandom.com/wiki/Overwatch_2" target="_blank" rel="noopener noreferrer">WIKI DO OVERWATCH</a>
                </div>
            </div>
        </main>
    )
}

export default Main;