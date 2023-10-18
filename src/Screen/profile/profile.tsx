import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import { UserContext } from "../../context/userContext";
export default function ScreenProfile() {

  const { name, email } = React.useContext(UserContext)
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
              {name}
            </Text>

            <Text style={styles.textEmailUser}> 
              {email}
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
