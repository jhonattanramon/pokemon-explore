import React from "react";
import { FlashList } from "@shopify/flash-list";
import { NamedAPIResource, NamedAPIResourceList } from "pokenode-ts";
import Components from "../Root";
import { View } from "react-native";
import themes from "../../Style/theme";

interface PropsRenderListPoke {
  data: NamedAPIResource[];
}

const RenderListPoke: React.FC<PropsRenderListPoke> = ({ data }) => {
  return (
    <FlashList
      data={data}
      numColumns={2}
      renderItem={({ item, target, index }) => (
        <View style={{width:"100%", height: 200}}>
          <Components.CardPokemon namePoke={item.name} key={index} />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      estimatedItemSize={10000}
    />
  );
};

export default RenderListPoke;
