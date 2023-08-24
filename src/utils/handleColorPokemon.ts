import axios from "axios"

interface props{
    urlSpecies: string
}

 export default  async function handleColorPokemon({urlSpecies}: props){
     await axios.get(urlSpecies)
}