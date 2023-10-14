import { StyleSheet } from "react-native";
import themes from "../../Style/theme";
import { headerStyleFont } from "../../Style/font";

const styles = StyleSheet.create({
  container: {},

  cardProfile: {
    padding: 10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    gap: 20
  },

  moldingImg: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 100,
    height: 100,
    backgroundColor: themes["lightTheme"].background,
    borderRadius: 100,
  },

  imgProfile: {
    width: "100%",
    height: "100%",
  },

  textNameUser:{
    fontSize: headerStyleFont.subHeadLine.fontSize,
    fontWeight: headerStyleFont.subHeadLine.fontWeight,
    textTransform: "capitalize"
  },
  textEmailUser:{
    fontSize: headerStyleFont.subTitle1.fontSize,
    color: themes["lightTheme"].secondaryColor
  },
  sectionPokesFavoritos:{
    padding: 10,
  },
  textPokesFavoritos:{
    fontSize: headerStyleFont.subHeadLine.fontSize,
    fontWeight: headerStyleFont.subHeadLine.fontWeight,
    color: themes["lightTheme"].secondaryColor
  }
});

export default styles;
