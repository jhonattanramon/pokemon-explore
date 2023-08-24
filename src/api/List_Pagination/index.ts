import axios, { AxiosError, AxiosResponse } from "axios";
import { NamedAPIResourceList } from "../../typings/TypesAPIPokemon/RosoureLists-Pagination/Named";

async function list_paginacao() {
  try {
    const res:AxiosResponse<NamedAPIResourceList> = await axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((res) => res);
      return res
  } catch (err) {
    const error = err as AxiosError
    return error.response
  }
}

export { list_paginacao };
