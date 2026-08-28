async function getHeroes() {
  try {
    const response = await fetch("https://overfast-api.tekrop.fr/heroes");

    if (!response.ok) {
      throw new Error("Erro na requisição de heróis.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Falha ao buscar heróis: ", error);
    throw error;
  }
}

export default getHeroes;
