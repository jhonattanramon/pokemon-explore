import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  arrowLeft: {
    position: "absolute",
    zIndex: 9999,
    left: 0,
    top: "25%",
    padding: 10,
  },

  arrowRight: {
    position: "absolute",
    zIndex: 9999,
    right: 0,
    top: "25%",
    padding: 10,
  },
});

export default styles;
