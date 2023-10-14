import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
export default function ScreenProfile() {
  return (
    <View>
      <View style={styles.cardProfile}>
        <View style={styles.moldingImg}>
          <Image
            resizeMode="contain"
            style={styles.imgProfile}
            source={require("../../../assets/image-profile-default.jpg")}
          />
        </View>

        <View> 
            <Text style={styles.textNameUser}> 
                profile name
            </Text>

            <Text style={styles.textEmailUser}> 
                profile Email
            </Text>
        </View>
      </View>


      <View style={styles.sectionPokesFavoritos}>
        <View>
            <Text style={styles.textPokesFavoritos}>Pokes Favorites</Text>
        </View>
      </View>
    </View>
  );
}
