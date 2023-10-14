import { Stack, router, useLocalSearchParams } from "expo-router";
import { Pokemon } from "pokenode-ts";
import React from "react";
import { View, Text, ColorValue } from "react-native";
import APIPoke from "../../../api/ConectAPIPokemon";
import ScreenDetailsPoke from "../../../Screen/detailsPoke";
import { Icon } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

interface TypeDataPoke{
  namePoke: string,
  idPoke: string | number, 
  backgroundColorStatusBar: string 
}

const PokemonDetails: React.FC = () => {
  const [dataPoke, setDataPoke] = React.useState<TypeDataPoke>({} as TypeDataPoke)

  function updateDataPoke(namePoke: string, idPoke: string | number, backgroundColorStatusBar: string ){
      setDataPoke( (prevState) =>({
        ...prevState,
        idPoke: idPoke,
        namePoke: namePoke,
        backgroundColorStatusBar: backgroundColorStatusBar
      }))
  }
  return (
    <>
    <StatusBar backgroundColor={dataPoke.backgroundColorStatusBar ? dataPoke.backgroundColorStatusBar : "white"}/>
      <Stack.Screen
        options={{
          title: dataPoke.namePoke ? (dataPoke.namePoke) : "pokemon",
          headerTransparent: true,
          headerLeft: () => (
            <View
            style={{padding:10}}
            >
              <Icon
                name="arrow-back-outline"
                type="ionicon"
                onPress={() => {
                  console.log("back");

                  router.back();
                }}
              />
            </View>
          ),
          headerRight: () => <Text>#{dataPoke.idPoke ? dataPoke.idPoke : "0"}</Text>
        }}
      />
      <ScreenDetailsPoke updateDataPoke={updateDataPoke}/>
    </>
  );
};

export default PokemonDetails;
