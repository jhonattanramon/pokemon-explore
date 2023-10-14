import { StyleSheet } from "react-native";
import { headerStyleFont } from "../../../Style/font";
import themes from "../../../Style/theme";
import { dimensions } from "../../../Style/dimensions";

const styleBaseStats = StyleSheet.create({
  container: {
    width: "100%",
    // borderColor: dimensions.border.borderColor,
    // borderWidth: dimensions.border.borderWidth,
    // borderRadius: dimensions.border.borderRadius
  },
  textIndiationCard: {
    textAlign: "center",
    paddingVertical: 7,
    fontSize: headerStyleFont.subHeadLine.fontSize,
    fontWeight: headerStyleFont.subHeadLine.fontWeight,
    color: themes["lightTheme"].secondaryColor,
  },

  containerStats: {
    width: "100%",
    justifyContent:"center",
  },

  indicationStat:{
    justifyContent:"center",
    alignItems:"center", 
    flex: 1,
    padding: 7
  },

  textIndicationStat:{
    fontSize: headerStyleFont.subTitle1.fontSize,
    fontWeight: headerStyleFont.subTitle1.fontWeight,
    color: themes["lightTheme"].secondaryColor,

  },

  valueStat:{
    flex: 5,
    flexDirection: "row",
    alignItems:"center",
    //justifyContent: "center",
    gap: 5,
  },

  textIndicationValueStat:{
    fontSize: headerStyleFont.subTitle1.fontSize,
    fontWeight: "500",
  },

  stats: {
    flexDirection: "row",
    alignItems:"center",
  },
});

export default styleBaseStats;
