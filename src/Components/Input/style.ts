import { Dimensions, StyleSheet } from "react-native";
import themes from "../../Style/theme";
import { dimensions } from "../../Style/dimensions";

const styles = StyleSheet.create({
    input: {
    },

    rootInput: {
        width:"100%",
        position:"relative",
        flexDirection:"row",
        alignItems:"center",


    },
    contentInput: {
        width:"100%",
        height: 40,
        borderWidth: 1,
        borderColor: themes["lightTheme"].secondaryColor,
        borderRadius: dimensions.border.borderRadius,
        padding: 5,
    },
    iconInput: {
        position:"absolute",
        right:3,
    }
})

export default styles