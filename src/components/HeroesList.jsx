import { useState, useEffect } from "react";
import getHeroes from "../service/HeroesService";
import HeroCard from "./HeroCard";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import RolesFilter from "./RolesFilter"

function HeroesList() {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeRoles, setActiveRoles] = useState(["damage", "support", "tank"]);
  const [currentPage, setCurrentPage] = useState(1);

  const heroesPerPage = 8;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHeroes();
        setHeroes(data);
      } catch (error) {
        setError("Não foi possível carregar heróis.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Carregando heróis...</p>;

  if (error) return <p>{error}</p>;

  const filteredHeroes = heroes
    .filter(hero => hero.name.toLowerCase()
      .includes(search.toLowerCase()))
    .filter(hero => activeRoles
      .includes(hero.role));

  function handleSearchChange(value) {
    setSearch(value);
    setCurrentPage(1);
  }

  function handleRoleFilterChange(role, checked) {
    if(checked) {
      setActiveRoles([...activeRoles, role]);
    } else {
      setActiveRoles(activeRoles.filter(activeRole => activeRole !== role));
    }

    setCurrentPage(1);
  }

  const totalPages = Math.ceil(filteredHeroes.length / heroesPerPage);
  const startIndex = (currentPage - 1) * heroesPerPage;
  const pageHeroes = filteredHeroes.slice(startIndex, startIndex + heroesPerPage);

  return (
    <section className="flex flex-col my-16 text-center text-dark-blue-3 justify-center items-center">
      <h2 className="mb-8 text-dark-blue-1 text-5xl font-extrabold text-shadow-sm">HERÓIS</h2>

      <SearchBar onSearchChange={handleSearchChange} />

      <RolesFilter activeRoles={activeRoles} onCheckboxChange={handleRoleFilterChange} />
     
      <div className="heroes-list mx-8 grid grid-cols-4 text-center justify-items-center items-center">
        {pageHeroes.map((hero) => (
          <HeroCard key={hero.key} hero={hero} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </section>
  );
}

export default HeroesList;