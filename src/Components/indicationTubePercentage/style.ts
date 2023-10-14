import { StyleSheet } from "react-native";
import themes from "../../Style/theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
        width: "80%",
        height: 5,
        borderRadius: 10,
        position: 'relative',
        overflow: 'hidden',
        flexDirection:"row"
      },
      tube: {
        backgroundColor: themes["lightTheme"].accentColor,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
      },
    
})

export default styles