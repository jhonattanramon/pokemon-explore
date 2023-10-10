import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { Pokemon } from "../../typings/TypesAPIPokemon/Pokemon/Pokemon";
import { AxiosResponse } from "axios";

const PokemonDetails: React.FC = () => {
  const params = useLocalSearchParams();
  const [pokemon, setPokemon] = React.useState<Pokemon | null>(null);
  console.log(pokemon);

  React.useEffect(() => {
  }, []);

  return pokemon ? (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  ) : (
    <View>
      <Text>Loading..</Text>
    </View>
  );
};

export default PokemonDetails;
