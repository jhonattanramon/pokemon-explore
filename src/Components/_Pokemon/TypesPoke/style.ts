import { StyleSheet } from "react-native";
import { headerStyleFont } from "../../../Style/font";
import themes from "../../../Style/theme";

const styles = StyleSheet.create({

    container:{
      padding:10,
    },
    textIndiationCard: {
        textAlign: "center",
        paddingVertical: 7,
        fontSize: headerStyleFont.subHeadLine.fontSize,
        fontWeight: headerStyleFont.subHeadLine.fontWeight,
        color: themes["lightTheme"].secondaryColor,
      },

      containerTypes: {
        flexDirection:"row",
        justifyContent:"space-evenly", 
        alignItems:"center"
      }
})

export default styles