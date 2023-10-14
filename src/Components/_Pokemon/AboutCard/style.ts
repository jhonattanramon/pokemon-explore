import { StyleSheet } from "react-native"
import { headerStyleFont } from "../../../Style/font";
import themes from "../../../Style/theme";

const styleAboutCard = StyleSheet.create({
  cardAbout: {
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  sectionCardAbout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  subSectionCardAbout: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  subSectionCardMoves:{
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  textIndicationSection: {
    fontSize: headerStyleFont.subTitle2.fontSize,
    color: themes["lightTheme"].secondaryColor,
  },

  textIndiationCard: {
    textAlign: "center",
    paddingVertical: 7,
    fontSize: headerStyleFont.subHeadLine.fontSize,
    fontWeight: headerStyleFont.subHeadLine.fontWeight,
    color: themes["lightTheme"].secondaryColor,
  },

  iconSections: {
    width: 25,
    height: 25,
  },
});

export default styleAboutCard