import axios from "axios";
import { Pokemon } from "pokenode-ts";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import APIPoke from "../../api/ConectAPIPokemon";
import IndicationLoading from "../IndicationLoading";
import stylesCardPokemon from "./style";
import { router } from "expo-router";

interface PropsCardPokemon {
  namePoke: string;
}

const CardPokemon: React.FC<PropsCardPokemon> = ({ namePoke }) => {
  const [pokemon, setPokemon] = React.useState<Pokemon | null>(null);

  React.useEffect(() => {
    (async () => {
      await APIPoke.getPokemonByName(namePoke).then((pokemon) =>
        setPokemon(pokemon)
      );
    })();
  }, []);

  return pokemon ? (
    <Pressable
    onPress={() => router.push(`/pokemon/${pokemon.id}`)} 
    style={stylesCardPokemon.containerCard}>
      <Text style={stylesCardPokemon.idPoke}>#{pokemon.id}</Text>
      <Image
        style={stylesCardPokemon.imgBackground}
        source={require("../../../assets/pokeball.png")}
      />
      <Image
        style={stylesCardPokemon.image}
        source={{ uri: pokemon.sprites.front_default as string }}
      />
      <Text>{pokemon.name}</Text>
    </Pressable>
  ) : (
    <IndicationLoading />
  );
};
export default CardPokemon;
