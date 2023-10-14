import React from "react";
import { Text, View } from "react-native";
import styleBaseStats from "./style";
import PercentageTube from "../../indicationTubePercentage";
import { Pokemon } from "pokenode-ts";

type TypeBaseStatsPoke = Pick<Pokemon, "stats">;

const BaseStatsPoke: React.FC<TypeBaseStatsPoke> = ({ stats }) => {
  function FormaterStatsName(stat: string) {
    switch (stat) {
      case "hp":
        return "HP";
      case "attack":
        return "ATK";
      case "defense":
        return "DEF";
      case "special-attack":
        return "SATK";
      case "special-defense":
        return "SDEF";
      case "speed":
        return "SPD";
    }
  }

  function baseStateToPercentage(baseState: number) {
    return (baseState / 255) * 100;
  }

  return (
    <View>
      <View style={styleBaseStats.container}>
        <Text style={styleBaseStats.textIndiationCard}>Base Stats</Text>

        {stats.map(({ stat, base_stat }, index) => (
          <View key={index} style={styleBaseStats.containerStats}>
            <View style={styleBaseStats.stats}>
              <View style={styleBaseStats.indicationStat}>
                <Text style={styleBaseStats.textIndicationStat}>
                  {FormaterStatsName(stat.name)}
                </Text>
              </View>

              <View style={styleBaseStats.valueStat}>
                <Text style={styleBaseStats.textIndicationValueStat}>
                  {base_stat}
                </Text>
                <PercentageTube percentage={baseStateToPercentage(base_stat)} />
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default BaseStatsPoke;
