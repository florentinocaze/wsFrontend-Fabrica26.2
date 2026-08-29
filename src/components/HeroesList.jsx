import { useState, useEffect } from "react";
import getHeroes from "../service/HeroesService";
import HeroCard from "./HeroCard";

function HeroesList() {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <section>
      <h2>HERÓIS</h2>
      
      <div className="heroes-list">
        {heroes.map((hero) => (
          <HeroCard key={hero.key} hero={hero}/>
        ))}
      </div>
    </section>
  );
}

export default HeroesList;
