import React from "react";
import { Icon, IconProps } from "react-native-elements";
import styles from "./style";
import { View } from "react-native";

type TypeIconInput = IconProps;

const IconInput: React.FC<TypeIconInput> = (props) => {
  return (
    <View  style={styles.iconInput}>
      <Icon {...props} />
    </View>
  );
};

export default IconInput;
