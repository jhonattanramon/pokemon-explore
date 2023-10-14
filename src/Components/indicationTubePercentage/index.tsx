import React from "react"
import { View, Text, DimensionValue } from "react-native";
import styles from  "./style"

interface TypePercentageTube{
  percentage: string | number
}
const PercentageTube: React.FC<TypePercentageTube> = ({ percentage }) => {
    return (
      <View style={styles.container}>
        <View style={[styles.tube, {
          width: `${percentage}%` as DimensionValue}]} />
      </View>
    );
  };
  
  export default PercentageTube 