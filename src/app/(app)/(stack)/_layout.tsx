import React, { useContext } from "react";
import { Redirect, Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function StackRoutesLayout() {
  return (
    <>
    <StatusBar backgroundColor="white"/>
      <Stack screenOptions={{}}>
        <Stack.Screen
          name="index"
          options={{
            title: "Inicio",
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            title: "Perfil",
          }}
        />
      </Stack>
    </>
  );
}
