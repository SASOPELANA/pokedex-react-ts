import type { PokemonDetail } from "../types/pokemonDetails.types";
import type { Pokemon } from "../models/pokemon.m";

{
  /* TODO: corregir los nombre que tiene caracteres especiales */
}
function correctName(name: string): string {
  if (name.includes("farfetch'd")) {
    return name.replace("farfetch'd", "farfetchd");
  } else if (name.includes("mr.-mime")) {
    return name.replace("mr.-mime", "mr-mime");
  } else if (name.includes("nidoran♀")) {
    return name.replace("nidoran♀", "nidoran-f");
  } else if (name.includes("nidoran♂")) {
    return name.replace("nidoran♂", "nidoran-m");
  } else {
    return name;
  }
}

const getPokemons = async (): Promise<Pokemon[]> => {
  {
    /* TODO: uso de la api rest */
  }

  try {
    const responde = await fetch(
      "https://unpkg.com/pokemons@1.1.0/pokemons.json",
    );

    if (!responde.ok) {
      throw new Error("Error al obtener los pokemons");
    }

    const data = await responde.json();

    let pokemons = data.results.map((pokemon: PokemonDetail) => ({
      name: pokemon.name,
      id: pokemon.national_number,
      imggif: correctName(pokemon.sprites["animated"]),
      imgnormal: pokemon.sprites["normal"],
      imglarge: pokemon.sprites["large"],
      total: pokemon.total,
      hp: pokemon.hp,
      attack: pokemon.attack,
      defense: pokemon.defense,
      sp_attack: pokemon.sp_atk,
      sp_defense: pokemon.sp_def,
      speed: pokemon.speed,
      type: pokemon.type,
    }));

    const unique = pokemons.filter(
      (pokemon: Pokemon, index: number) =>
        pokemons.findIndex((u: Pokemon) => u.id === pokemon.id) === index,
    );

    pokemons = unique;

    return pokemons;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los pokemons");
  }
};

export default getPokemons;
