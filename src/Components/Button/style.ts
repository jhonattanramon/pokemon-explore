import { StyleSheet } from "react-native";
import themes from "../../Style/theme";
import { dimensions } from "../../Style/dimensions";

const styles = StyleSheet.create({
    rootButton:{
        width: "100%",
        height:40,
        paddingVertical: 5,
        paddingHorizontal: 20,
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