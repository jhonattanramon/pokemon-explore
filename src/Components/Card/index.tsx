import React from "react";
import { router, useNavigation } from "expo-router";
import { Href } from "expo-router/build/link/href";
import { Pokemon } from "../../typings/TypesAPIPokemon/Pokemon/Pokemon";
import { Image, Pressable, Text, View } from "react-native";

interface propsCard {
  pokemon: Pokemon;
}

interface handleNavigationPokemon {
  id: number;
}

const CardPokemon: React.FC<propsCard> = ({ pokemon }) => {
  const handleNavigationPokemon = ({ id }: handleNavigationPokemon) => {
    router.push(`pokemon/${id}`);
  };
  const { id, name, sprites } = pokemon;

  return (
    <Pressable
      onPress={() => handleNavigationPokemon({ id: id })}
    >
      <View>
        <Image
            style={{width: 20, height: 20}}
          source={{
            uri: `${sprites.front_default}`,
          }}
        />
      </View>
      <View>
        <Text >{name}</Text>
      </View>
    </Pressable>
  );
};
export default CardPokemon;
