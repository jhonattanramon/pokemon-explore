import { StyleSheet} from "react-native"
import themes from "./theme"

export const dimensions = StyleSheet.create({
    border:{
        borderColor: themes["lightTheme"].secondaryColor,
        borderWidth: 0.9,
        borderRadius: 5
    }
})

