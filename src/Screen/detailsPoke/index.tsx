import { useLocalSearchParams } from "expo-router";
import { Pokemon } from "pokenode-ts";
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  PanResponder,
} from "react-native";
import APIPoke from "../../api/ConectAPIPokemon";
import AboutCardPoke from "../../Components/_Pokemon/AboutCard";
import BaseStatsPoke from "../../Components/_Pokemon/BaseStats";
import TypesPoke from "../../Components/_Pokemon/TypesPoke";
import themes from "../../Style/theme";
import IndicationLoading from "../../Components/IndicationLoading";
import { Icon } from "react-native-elements";
import styles from "./style";
import { typesColor } from "../../Style/colors";

interface typeScreenDetailsPoke {
  updateDataPoke: (namePoke: string, idPoke: string | number,   backgroundColorStatusBar: string 
    ) => void;
}

const ScreenDetailsPoke: React.FC<typeScreenDetailsPoke> = ({
  updateDataPoke,
}) => {
  const { id } = useLocalSearchParams();
  const [pokemon, setPokemon] = React.useState<Pokemon | null>(null);

  React.useEffect(() => {
    (async () => {
      await APIPoke.getPokemonById(Number(id))
        .then((poke) => setPokemon(poke))
        .catch((err) => console.log(err));
    })();
  }, []);

  React.useEffect(() => {
    if (pokemon) updateDataPoke(pokemon.name, pokemon.id, typesColor[pokemon.types[0].type.name as "default"].color);
  }, [pokemon]);

  async function NextPoke() {
    if (pokemon) {
      setPokemon(null);
      await APIPoke.getPokemonById(pokemon.id + 1).then((poke) =>
        setPokemon(poke)
      );
    }
  }

  async function BackPoke() {
    if (pokemon) {
      if (pokemon.id != 1) {
        setPokemon(null);
        await APIPoke.getPokemonById(pokemon.id - 1).then((poke) =>
          setPokemon(poke)
        );
      }
    }
  }

  return pokemon ? (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 7,
        paddingBottom: 7,
        position: "relative",
        backgroundColor:
          typesColor[pokemon.types[0].type.name as "default"].color,
      }}
    >
      <Pressable onPress={NextPoke} style={styles.arrowRight}>
        <Icon
          size={30}
          name="chevron-forward-outline"
          type="ionicon"
          color={themes["lightTheme"].secondaryColor}
        />
      </Pressable>

      <Pressable onPress={BackPoke} style={styles.arrowLeft}>
        <Icon
          size={30}
          name="chevron-back-outline"
          type="ionicon"
          color={themes["lightTheme"].secondaryColor}
        />
      </Pressable>
      <View style={{ flex: 1 }}>
        <Image
          style={{
            width: 200,
            height: 200,
            opacity: 0.1,
            position: "absolute",
            left: "27%",
            top: "30%",
          }}
          source={require("../../../assets/pokeball.png")}
        />

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 250, height: 250, position:"relative", top: "30%", zIndex:9999 }}
            source={{ uri: pokemon.sprites.front_default as string }}
          />
        </View>
      </View>

      <View
        style={{
          flex: 2,
          height: "100%",
          backgroundColor: themes["lightTheme"].primaryColor,
        }}
      >
        <TypesPoke types={pokemon.types} />

        <AboutCardPoke
          weight={pokemon.weight}
          height={pokemon.height}
          moves={pokemon.moves}
        />

        <BaseStatsPoke stats={pokemon.stats} />
      </View>
    </View>
  ) : (
    <IndicationLoading />
  );
};

export default ScreenDetailsPoke;
