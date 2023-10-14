import React, { ReactNode } from "react";
import { View } from "react-native";
import styles from "./style";

interface TypeRootInput {
  children: ReactNode;
}

const RootInput: React.FC<TypeRootInput> = ({ children }) => {
  return <View style={styles.rootInput}>{children}</View>;
};
export default RootInput
