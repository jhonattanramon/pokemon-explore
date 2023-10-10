import { ColorValue } from "react-native";

interface ValuesTheme {
  primaryColor: ColorValue;
  secondaryColor: ColorValue;
  background: ColorValue;
  text: string;
  accentColor: ColorValue;
  successColor: ColorValue;
  errorColor: ColorValue;
  identity: ColorValue;
}

interface Themes {
  lightTheme: ValuesTheme;
  darkTheme: ValuesTheme;
}

const themes: Themes = {
  lightTheme: {
    accentColor: "#FFD700",
    background: "#efefef",
    errorColor: "#FF6347",
    primaryColor: "#e0e0e0",
    secondaryColor: "#666666",
    successColor: "#32CD32",
    text: "#333333",
    identity: "#dc0a2d",
  },

  darkTheme: {
    accentColor: "#FFA500",
    background: "#333333",
    errorColor: "#FF4500",
    primaryColor: "#1E1E1E",
    secondaryColor: "#BEBEBE",
    successColor: "#008000",
    text: "#ffffff",
    identity: "#dc0a2d",
  },
};

export default themes