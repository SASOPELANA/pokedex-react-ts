export interface PokemonDetail {
  name: string;
  national_number: string;
  sprites: {
    animated: string;
    normal: string;
    large: string;
  };
  total: number;
  hp: number;
  attack: number;
  defense: number;
  sp_atk: number;
  sp_def: number;
  speed: number;
  type?: string[];
}
