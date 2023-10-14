import React, { ReactElement, ReactNode } from "react";
import { Pressable, PressableProps, TouchableOpacityProps } from "react-native";
import { colors } from "../../Style/colors";
import { styleInitialButton } from "../../Style/buttonStyle";
import styles from "./style";

interface rootButton extends PressableProps {
  children: ReactNode,
}

const RootButton: React.FC<rootButton> = ({
    children,
  ...rest
}) => {
  return (
    <Pressable style={styles.rootButton} {...rest}>
      {children}
    </Pressable>
  );
};

export default RootButton;
