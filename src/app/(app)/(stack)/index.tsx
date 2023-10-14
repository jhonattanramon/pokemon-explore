import React from "react";
import ScreenIndex from "../../../Screen/index/index";
import { Stack, Tabs, router } from "expo-router";
import { Image, Pressable } from "react-native";
import { View } from "react-native";

function Home() {

  return (
    <>
      <Stack.Screen
        options={{
          title: "Pokédex",
          headerTitle: "Pokédex",
          headerTitleAlign: "left",
          headerTitleStyle: { fontSize: 25, fontWeight: "bold" },
          headerLeft: () => (
            <View style={{ margin: 5 }}>
              <Image
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
                source={require("../../../../assets/pokeball.png")}
              />
            </View>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => {
                router.push("profile");
              }}
              style={{ margin: 5, padding: 10 }}
            >
              <Image
                style={{ width: 24, height: 24 }}
                resizeMode="cover"
                source={require("../../../../assets/profileIcon.png")}
              />
            </Pressable>
          ),
        }}
      />
      <ScreenIndex />
    </>
  );
}

export default Home;
