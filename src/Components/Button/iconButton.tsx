import React from "react";
import { ColorValue, View } from "react-native";
import { Icon, IconProps } from "react-native-elements";
import styles from "./style";


type TypeIconButton = IconProps

const IconButton: React.FC<TypeIconButton> = (props) => {
  return (
    <View style={styles.iconButton}>
      <Icon {...props} />
    </View>
  );
};
export default IconButton;
