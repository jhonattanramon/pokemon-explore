import React from "react";
import { Text } from "react-native";
import styles from "./style";

interface contentButton {
  text: string;
}
const ContentButton: React.FC<contentButton> = ({ text }) => {
  return <Text style={styles.contentButton}>{text}</Text>;
};

export default ContentButton;
