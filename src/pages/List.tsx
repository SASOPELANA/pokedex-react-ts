import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import Pagination from "react-bootstrap/Pagination";

import { useState, useEffect } from "react";
import getPokemons from "../controllers/getPokemon.controller";
import type { Pokemon } from "../models/pokemon.m";

import CorazonIcon from "../assets/icons/corazon-verde-icon.png";
import AtaqueIcon from "../assets/icons/espadas-icon.png";
import DefenseIcon from "../assets/icons/defensa-icon.png";
import AtaqueEspecialIcon from "../assets/icons/att-especial-icon.png";
import DefensaEspecialIcon from "../assets/icons/defensa-especial-icon.png";
import SpeedIcon from "../assets/icons/speed-icon.png";
import "./../styles/Pagination.css";

const List = () => {
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 12;

  useEffect(() => {
    const getAllPokemons = async () => {
      const response = await getPokemons();
      setPokemon(response);
    };

    getAllPokemons();
  }, []);

  const filerPokemons = pokemons?.slice(0, 500).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  });

  const filterId = pokemons?.slice(0, 500).filter((pokemon) => {
    return pokemon.id.toString().match(query.toLowerCase());
  });

  const filterResult = [...filerPokemons, ...filterId];

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = filterResult.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon,
  );

  const totalPages = Math.ceil(filterResult.length / pokemonsPerPage);

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <div>
      <h1>Pokemon SopeDevs</h1>

      <header>
        <input
          value={query}
          placeholder="Filtrar por nombre o id"
          onChange={(event) => {
            setQuery(event.target.value.trim());
            setCurrentPage(1);
          }}
          type="text"
        />
      </header>

      <div className="content-wrapper">
        <div className="content">
          <div className="row gap-3">
            {
              // foreach de tres cartas
            }

            {currentPokemons.map((pokemon: Pokemon) => (
              <Card
                className="mx-auto pokemon-card"
                style={{ width: "18rem" }}
                key={pokemon.id}
              >
                <div className="pokemon-card__header">
                  <div className="pokemon-card__types">
                    {pokemon.type?.map((t) => (
                      <span
                        key={t}
                        className={`pokemon-card__type pokemon-type--${t.toLowerCase()}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Card.Img
                  variant="top"
                  height="120"
                  width="120"
                  src={pokemon.imggif}
                  className="d-block mx-auto w-50 pokemon-card__image"
                />
                <Card.Body>
                  <Card.Title className="text-center pokemon-card__title">
                    <span className="pokemon-card__id">#{pokemon.id}</span>
                    <span className="pokemon-card__name">{pokemon.name}</span>
                  </Card.Title>

                  <div className="pokemon-card__stats-grid">
                    <div className="pokemon-card__stat-item">
                      <Figure.Image width={16} height={16} src={CorazonIcon} />
                      <span>HP: {pokemon.hp}</span>
                    </div>
                    <div className="pokemon-card__stat-item">
                      <Figure.Image width={16} height={16} src={AtaqueIcon} />
                      <span>Ataque: {pokemon.attack}</span>
                    </div>
                    <div className="pokemon-card__stat-item">
                      <Figure.Image width={16} height={16} src={DefenseIcon} />
                      <span>Defensa: {pokemon.defense}</span>
                    </div>
                    <div className="pokemon-card__stat-item">
                      <Figure.Image
                        width={16}
                        height={16}
                        src={AtaqueEspecialIcon}
                      />
                      <span>Ataque Esp: {pokemon.sp_attack}</span>
                    </div>
                    <div className="pokemon-card__stat-item">
                      <Figure.Image
                        width={16}
                        height={16}
                        src={DefensaEspecialIcon}
                      />
                      <span>Defensa Esp: {pokemon.sp_defense}</span>
                    </div>
                    <div className="pokemon-card__stat-item">
                      <Figure.Image width={18} height={18} src={SpeedIcon} />
                      <span>Velocidad: {pokemon.speed}</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
          {filterResult.length > pokemonsPerPage && (
            <Pagination className="justify-content-center mt-4 custom-pagination">
              <Pagination.Prev
                onClick={goToPrevPage}
                disabled={currentPage === 1}
              />
              <Pagination.Item active>{currentPage}</Pagination.Item>
              <Pagination.Next
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
