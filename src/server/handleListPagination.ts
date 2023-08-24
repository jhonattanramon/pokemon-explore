import axios, { Axios, AxiosResponse } from "axios";
import { NamedAPIResource } from "../typings/TypesAPIPokemon/Utility";
import { NamedAPIResourceList } from "../typings/TypesAPIPokemon/RosoureLists-Pagination/Named";
import { Pokemon } from "../typings/TypesAPIPokemon/Pokemon/Pokemon";

interface propsHadlePagition {
  url?: string;
}

interface propHadleList {
  urlsToPagination: NamedAPIResource<Pokemon>[];
}

export default async function handleListPagination({
  url,
}: propsHadlePagition) {
  const handleList = async ({ urlsToPagination }: propHadleList) => {
    const promisesListPagination: Promise<AxiosResponse<Pokemon>>[] =
      urlsToPagination.map(({ url }) => axios.get(url));
    return await Promise.all(promisesListPagination).then((res) =>
      res.map(({ data }) => data)
    );
  };
  if (url) {
    const responsePagination: AxiosResponse<NamedAPIResourceList> = await axios
      .get(url)
      .then((res) => res);
    const listPokemon = await handleList({ urlsToPagination: responsePagination.data.results });

    return {
      next: responsePagination.data.next,
      list: listPokemon
    }

  } else {
    return null;
  }
}
