import { StyleSheet } from "react-native";
import themes from "../../Style/theme";

const stylesCardPokemon = StyleSheet.create({
  containerCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themes["lightTheme"].primaryColor,
    margin: 10,
    borderRadius: 10,
    
  },
  image: {
    width: 100,
    height: 100,
  },
  idPoke:{
    position: "absolute",
    right: 0,
    top: 0,
    margin: 10,
  },

  imgBackground: {
    position: "absolute",
    width: 120,
    height: 120,
    opacity: 0.05,

  }
});

export default stylesCardPokemon;
