import { StyleSheet} from "react-native"

interface colorsType{
    backgroundColor: string;
    backgroundHighlight: string;
    textColor: string;
    ButtonBoxShadow: string
}

export const colors: colorsType = {
    backgroundColor: "white",
    backgroundHighlight: "rgb(240, 240, 240)", 
    textColor:"text-gray-950",
    ButtonBoxShadow: "shadow-sm"
}


export const graysScale = StyleSheet.create({
    dark: { color: "#212121"},
    medium: {color: "#666666"},
    light: {color: "#e0e0e0"},
    background: { color: "#efefef"},
    white: {color: "#ffffff"},
})


export const types = StyleSheet.create({
    bug: { color: "#a7b723"},
    dark: {color: "#75574c"},
    dragon: { color: "#7037ff"}, 
    electric: {color: "#f9cf30"},
    fairy: {color: "#e69eac"},
    fighting: {color: "#c12239"},
    fire: { color: "#f57d31"},
    flying: {color: "#a891ec"},
    ghost: {color: "#70559b"},
    normal:{ color:"#aaa67f"},
    grass: {color:"#74cb48"},
    ground: {color: "#dec16b"},
    ice: {color: "#9ad6df"},
    poison: {color: "#fb5584"},
    psychic: {color: "#A040A0"},
    rock: {color: "#b69e31"},
    steel: {color: "#b7b9d0"},
    water: {color: "#6493eb"},
    default: { color: "#fff"}
})



