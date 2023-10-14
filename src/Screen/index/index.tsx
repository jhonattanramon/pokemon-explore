import React, { useContext, useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Components from "../../Components/Root";
import APIPoke from "../../api/ConectAPIPokemon";
import { NamedAPIResource } from "pokenode-ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../context/userContext";

interface TypeStateScreenIndex{
  listPokemon: NamedAPIResource[] | null
}

export default function ScreenIndex() {
  const [stateScreenIndex, setStateScreenIndex] = useState<TypeStateScreenIndex>({
  listPokemon: null,
  })

  function updateListPokemn(listPokemon: NamedAPIResource[]){
    setStateScreenIndex( (prevState) => ({
      ...prevState,
      listPokemon: listPokemon
    }))
  }

  async function handleListPokeToAsyncStotege() {
    const list = await AsyncStorage.getItem("PokeList");

    if (list) {
      return JSON.parse(list) as NamedAPIResource[];
    } else {
      const { results: list } = await APIPoke.listPokemons(0, 10000);
      await AsyncStorage.setItem("PokeList", JSON.stringify(list));
      return list;
    }
  }

  // function paginateArray(array: unknown[], page: number, pageSize: number) {
  //   const start = (page - 1) * pageSize;
  //   const end = start + pageSize;
  //   const totalPages = Math.ceil(array.length / pageSize);
  //   const currentPageData = array.slice(start, end);

  //   return {
  //     currentPage: page,
  //     totalPages: totalPages,
  //     data: currentPageData,
  //   };
  // }

  useEffect(() => {
    (async () => {
      await handleListPokeToAsyncStotege().then((listPoke) =>
        updateListPokemn(listPoke)
      );
    })();
  }, []);

  return stateScreenIndex.listPokemon ? (
    <View style={{ flex: 1}}>

      <Components.RenderListPoke data={stateScreenIndex.listPokemon} />
    </View>
  ) : (
    <Components.IndicationLoading />
  );
}
