import { useState, useEffect } from "react";
import getHeroes from "../service/HeroesService";
import HeroCard from "./HeroCard";
import Pagination from "./Pagination";

function HeroesList() {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
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

  const totalPages = Math.ceil(heroes.length / heroesPerPage);
  const startIndex = (currentPage - 1) * heroesPerPage;
  const pageHeroes = heroes.slice(startIndex, startIndex + heroesPerPage);

  return (
    <section>
      <h2>HERÓIS</h2>

      <div className="heroes-list">
        {pageHeroes.map((hero) => (
          <HeroCard key={hero.key} hero={hero}/>
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
    </section>
  );
}

export default HeroesList;