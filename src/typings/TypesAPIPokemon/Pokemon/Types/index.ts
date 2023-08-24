import { Generation } from "../../Games/Generations";
import { Move } from "../../Moves/Move";
import { MoveDamageClass } from "../../Moves/MovesDemageClass";
import { GenerationGameIndex, Name, NamedAPIResource } from "../../Utility";
import { Pokemon } from "../Pokemon";

export interface Type {
  id: number;
  name: string;
  damage_relations: TypeRelations;
  past_damage_relations: TypeRelationsPast[];
  game_indices: GenerationGameIndex[];
  generation: NamedAPIResource<Generation>;
  move_damage_class: NamedAPIResource<MoveDamageClass>;
  names: Name[];
  pokemon: TypePokemon[];
  moves: NamedAPIResource<Move>[];
}

export interface TypeRelations {
  no_damage_to: NamedAPIResource<Type>[];
  half_damage_to: NamedAPIResource<Type>[];
  double_damage_to: NamedAPIResource<Type>[];
  no_damage_from: NamedAPIResource<Type>[];
  half_damage_from: NamedAPIResource<Type>[];
  double_damage_from: NamedAPIResource<Type>[];
}

export interface TypeRelationsPast {
  generation: NamedAPIResource<Generation>;
  damage_relations: TypeRelations;
}

export interface TypePokemon {
  slot: number;
  pokemon: NamedAPIResource<Pokemon>;
}
