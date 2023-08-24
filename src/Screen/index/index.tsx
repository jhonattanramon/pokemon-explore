import React, { useEffect, useState } from "react";
import { list_paginacao } from "../../api/List_Pagination";
import TW from "../../ReactWind";
import handleListPagination from "../../server/handleListPagination";
import { Pokemon } from "../../typings/TypesAPIPokemon/Pokemon/Pokemon";
import RenderListPokemon from "../../Components/ListPokemon";
import { View } from "react-native";
import ScrollViewRender from "../../Components/ScrollViewRender";
import axios, { AxiosResponse } from "axios";
import { NamedAPIResourceList } from "../../typings/TypesAPIPokemon/RosoureLists-Pagination/Named";
import { NamedAPIResource } from "../../typings/TypesAPIPokemon/Utility";

interface handleRenderMorePokemon {
  url: string | null;
}

export default function ScreenIndex() {
  const [listPokemon, setListPokemon] = useState<Pokemon[] | null>(null);
  const [urlNextPage, setUrlNextPage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const urlInitial = `https://pokeapi.co/api/v2/pokemon`;
        const response = await handleListPagination({
          url: urlInitial,
        }).then((res) => res);

        if (response) {
          setListPokemon(response.list);
          setUrlNextPage(response.next);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const handleRenderMorePokemon = async () => {
    if (urlNextPage) {
      const response = await handleListPagination({ url: urlNextPage });
      
      if(listPokemon && response)
      return setListPokemon([...listPokemon, ...response.list
    ])
    }
  };

  return listPokemon ? (
    <ScrollViewRender functionRenderMorePokemon={handleRenderMorePokemon}>
      <TW.View className="flex flex-row flex-wrap justify-around">
        <RenderListPokemon listPokemon={listPokemon} />
      </TW.View>
    </ScrollViewRender>
  ) : (
    <TW.View>
      <TW.Text>Loadding...</TW.Text>
    </TW.View>
  );
}
