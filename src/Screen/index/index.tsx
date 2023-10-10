import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Components from "../../Components/Root";
import APIPoke from "../../api/ConectAPIPokemon";
import { NamedAPIResource } from "pokenode-ts";

export default function ScreenIndex() {
  const [listPokemon, setListPokemon] = useState<NamedAPIResource[] | null>(null);

 async function handleGetPokemonName(name: string) {
    return await APIPoke.getPokemonByName("pikachu")
      .then((pokemon) => pokemon)
      .catch((err) => console.log(err));
  }

 async function handleGetAllPokemon(){
  return await APIPoke.listPokemons(0,10000)
 }

  useEffect(() => {
    ( async () =>{
         await handleGetAllPokemon().then( listPoke => setListPokemon(listPoke.results))
  })()
  }, []);

  return listPokemon ? <View style={{flex: 1}}>
      <Components.RenderListPoke data={listPokemon}/> 
  </View> : <Components.IndicationLoading />;
}
