import React, { useContext } from "react";
import ScreenProfile from "../../../Screen/profile/profile";
import { Stack } from "expo-router";
import { Icon } from "react-native-elements";
import { Pressable } from "react-native";
import { UserContext } from "../../../context/userContext";

export default function Profile() {

  const { signOut } = useContext(UserContext)
  return (
    <>
      <Stack.Screen
        options={{
          title: "Perfil",
          headerRight: () => (
            <Pressable onPress={signOut}>
              <Icon name="log-out-outline" type="ionicon" />
            </Pressable>
          )
        }}
      />

      <ScreenProfile />
    </>
  );
}
