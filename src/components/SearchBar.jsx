function SearchBar({ onSearchChange }) {
    return (
        <div className="search-bar">
            <label htmlFor="name-search">Buscar por nome:</label>
            <input type="search" onChange={(event) => onSearchChange(event.target.value)} id="name-search" name="name-search" placeholder="Nome do herói"/>
        </div>
    )
}

export default SearchBar;