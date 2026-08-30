function SearchBar({ onSearchChange }) {
    return (
        <div className="search-bar flex flex-col mb-8">
            <label htmlFor="name-search" className="mr-2 mb-2">Buscar por nome:</label>
            <input 
                type="search" 
                onChange={(event) => onSearchChange(event.target.value)} 
                id="name-search" 
                name="name-search" 
                placeholder="Nome do herói"
                className="px-2 py-1 border border-hidden rounded-sm bg-white outline-none focus:border-light-grey-2 focus:border-2"
            />
        </div>
    )
}

export default SearchBar;