import React from "react";
import { Text } from "react-native";

interface contentButton {
  text: string;
}
const ContentButton: React.FC<contentButton> = ({ text }) => {
  return <Text>{text}</Text>;
};

export default ContentButton;
