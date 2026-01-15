{
  /* TODO: importar librerias de bootstrap */
}
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Figure from "react-bootstrap/Figure";

{
  /* TODO: importar librerias de react */
}
import { useState, useEffect } from "react";
import getPokemons from "../controllers/getPokemon.controller";
import type { Pokemon } from "../models/pokemon.m";

{
  /* TODO: importar imagenes */
}
import CorazonIcon from "../assets/icons/corazon-verde-icon.png";
import AtaqueIcon from "../assets/icons/espadas-icon.png";
import DefenseIcon from "../assets/icons/defensa-icon.png";
import AtaqueEspecialIcon from "../assets/icons/att-especial-icon.png";
import DefensaEspecialIcon from "../assets/icons/defensa-especial-icon.png";
import SpeedIcon from "../assets/icons/speed-icon.png";

const List = () => {
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getAllPokemons = async () => {
      const response = await getPokemons();
      setPokemon(response);
    };

    getAllPokemons();
  }, []);

  const filerPokemons = pokemons?.slice(0, 300).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  });

  const filterId = pokemons?.slice(0, 300).filter((pokemon) => {
    return pokemon.id.toString().match(query.toLowerCase());
  });

  const filterResult = [...filerPokemons, ...filterId];

  return (
    <div>
      <h1>Pokemon SopeDevs</h1>

      <header>
        <input
          value={query}
          placeholder="Filtrar por nombre o id"
          onChange={(event) => setQuery(event.target.value.trim())}
          type="text"
        />
      </header>

      <div className="content-wrapper">
        <div className="content">
          <div className="row gap-3">
            {
              // foreach de tres cartas
            }

            {filterResult?.slice(0, 300).map((pokemon: Pokemon) => (
              <Card
                className="mx-auto"
                style={{ width: "18rem" }}
                key={pokemon.id}
              >
                <Card.Header>
                  {" "}
                  <b>Tipo: </b> {pokemon.type?.join(" - ")}
                </Card.Header>
                <Card.Img
                  variant="top"
                  height="100"
                  width="80"
                  src={pokemon.imggif}
                  className="d-block mx-auto w-50"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    <strong>
                      {pokemon.id} - {pokemon.name}
                    </strong>
                  </Card.Title>

                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Figure.Image width={16} height={16} src={CorazonIcon} />
                      <b> HP: </b> {pokemon.hp}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image width={16} height={16} src={AtaqueIcon} />
                      <b> Ataque: </b> {pokemon.attack}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image width={16} height={16} src={DefenseIcon} />
                      <b> Defensa: </b> {pokemon.defense}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        src={AtaqueEspecialIcon}
                      />
                      <b> Ataque Especial: </b> {pokemon.sp_attack}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        src={DefensaEspecialIcon}
                      />
                      <b> Defensa Especial: </b> {pokemon.sp_defense}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image width={18} height={18} src={SpeedIcon} />
                      <b> Velocidad: </b> {pokemon.speed}
                    </ListGroup.Item>
                  </ListGroup>

                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
