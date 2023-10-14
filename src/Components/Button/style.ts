import { StyleSheet } from "react-native";
import themes from "../../Style/theme";
import { dimensions } from "../../Style/dimensions";

const styles = StyleSheet.create({
    rootButton:{
        width: "100%",
        height:40,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:themes["lightTheme"].accentColor,
        borderRadius: dimensions.border.borderRadius
    },
    contentButton:{
        color: themes["lightTheme"].secondaryColor
    },
    iconButton:{

    }
})

export default styles