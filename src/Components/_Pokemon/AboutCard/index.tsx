import React from "react";
import { View, Text, Image } from "react-native";
import styleAboutCard from "./style";
import { Pokemon } from "pokenode-ts";

type TypeAboutCardPoke = Pick<Pokemon, "height" | "weight" | "moves">;

const AboutCardPoke: React.FC<TypeAboutCardPoke> = ({
  weight,
  height,
  moves,
}) => {

  function decimetreToCetimeter(height: number){
    return height * 10
  }

  function hectogramaToGramas(weight: number){
    return weight * 100
  }
  return (
    <View>
      <Text style={styleAboutCard.textIndiationCard}>About</Text>

      <View style={styleAboutCard.cardAbout}>
        <View style={styleAboutCard.sectionCardAbout}>
          <View style={styleAboutCard.subSectionCardAbout}>
            <Image
              style={styleAboutCard.iconSections}
              source={require("../../../../assets/weight.png")}
            />
            <Text>{hectogramaToGramas(weight)} g</Text>
          </View>
          <Text style={styleAboutCard.textIndicationSection}>Weignt</Text>
        </View>

        <View style={styleAboutCard.sectionCardAbout}>
          <View style={styleAboutCard.subSectionCardAbout}>
            <Image
              style={styleAboutCard.iconSections}
              source={require("../../../../assets/straighten.png")}
            />
            <Text>{decimetreToCetimeter(height)} cm </Text>
          </View>
          <Text style={styleAboutCard.textIndicationSection}>Height</Text>
        </View>

        <View style={styleAboutCard.sectionCardAbout}>
          <View style={styleAboutCard.subSectionCardMoves}>
            <Text>{moves[0].move.name}</Text>
            <Text>{moves[1].move.name}</Text>
          </View>
          <Text style={styleAboutCard.textIndicationSection}>Moves</Text>
        </View>
      </View>
    </View>
  );
};

export default AboutCardPoke;
