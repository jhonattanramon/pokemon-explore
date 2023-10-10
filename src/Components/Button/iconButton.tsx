import React from "react";
import { ColorValue, View } from "react-native";
import { Icon } from "react-native-elements";

interface iconButton {
  name: string;
  color?: ColorValue | number;
  type?: string;
}

const IconButton: React.FC<iconButton> = ({ color, name, type }) => {
  return (
    <View>
      <Icon style={{}} name={name} color={color} type={type} />
    </View>
  );
};
export default IconButton;
