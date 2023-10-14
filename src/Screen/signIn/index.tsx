import React, { useContext } from "react";
import { Text, Pressable, View, TextInput, Image } from "react-native";
import Components from "../../Components/Root";
import themes from "../../Style/theme";
import { UserContext } from "../../context/userContext";
import { router } from "expo-router";
import { headerStyleFont } from "../../Style/font";

const ScreenSignIn = () => {
    const { signIn } = useContext(UserContext)
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: "60%",
          gap: 13,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../../../assets/app-icon.png")}
        />

<Text style={{
                fontSize: headerStyleFont.headLine.fontSize,
                fontWeight: headerStyleFont.headLine.fontWeight
                }}> 
                Sign In
            </Text>

        <View style={{ width: "100%" }}>
          <Components.Input.RootInput>
            <Components.Input.ContentInput
              inputMode="email"
              placeholder="Email"
              placeholderTextColor={themes["lightTheme"].secondaryColor}
            />
          </Components.Input.RootInput>
        </View>

        <View style={{ width: "100%" }}>
          <Components.Button.Root onPress={signIn}>
            <Components.Button.Content text="Sign In" />
          </Components.Button.Root>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Pressable
          onPress={() => {  router.push("/sign-up")}}
          >
            <Text style={{ fontSize: 12 }}>Create Account</Text>
          </Pressable>

          <Pressable>
            <Text style={{ fontSize: 12 }}>Entry Guest</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ScreenSignIn;
