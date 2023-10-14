import React, { useContext } from "react";
import { Stack, router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { UserContext } from "../context/userContext";
import ScreenSignIn from "../Screen/signIn";

export default function SignIn() {
  const { isAuthentcated, signIn } = useContext(UserContext);

  React.useEffect(() => {
    if (isAuthentcated) {
      router.replace("/");
    }
  }, [isAuthentcated]);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Sign in",
        }}
      />

      <ScreenSignIn />
    </>
  );
}
