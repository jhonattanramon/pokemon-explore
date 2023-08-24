import React from "react";
import TW from "../../ReactWind";
import { Pokemon } from "../../typings/TypesAPIPokemon/Pokemon/Pokemon";
import CardPokemon from "../Card";

interface propsListPokemon {
  listPokemon: Pokemon[];
}

const RenderListPokemon: React.FC<propsListPokemon> = ({ listPokemon }) => {
  return listPokemon.map(({ id, name, sprites  }) => (
    <TW.View key={id}>
      <CardPokemon name={name} image={sprites.front_default}  />
    </TW.View>
  ));
};


export default RenderListPokemon