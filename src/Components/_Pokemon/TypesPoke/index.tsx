import React from "react";
import { Pokemon } from "pokenode-ts";
import { Text, View } from "react-native";
import styles from "./style";
import { dimensions } from "../../../Style/dimensions";
import themes from "../../../Style/theme";
import { colors, typesColor } from "../../../Style/colors";

type TypePokeType = Pick<Pokemon, "types">;

interface TypePillType {
  nameType: string;
}

const TypesPoke: React.FC<TypePokeType> = ({ types }) => {
  
  function PillType({ nameType }: TypePillType) {
    return (
      <View
        style={{
          paddingVertical: 5,
          paddingHorizontal: 20,
          borderRadius: dimensions.border.borderRadius,
          backgroundColor: typesColor[nameType as "default"].color,
        }}
      >
        <Text>{nameType}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTypes}>
        {types.map(({ type }, index) => (
          <PillType key={index} nameType={type.name} />
        ))}
      </View>
    </View>
  );
};

export default TypesPoke;
