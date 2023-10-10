import React from "react-native";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";
import themes from "../../Style/theme";


const IndicationLoading = () => {
  return (
    <View style={{ flex: 1 }}>
      <ActivityIndicator
      style={{flex: 1}}
        color={themes["lightTheme"].identity}
        size={20}
        animating={true}
      />
    </View>
  );
};

export default IndicationLoading;
