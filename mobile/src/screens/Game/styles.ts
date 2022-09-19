import { THEME } from "./../../theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: "space-between",
  },
  logo: {
    width: 72,
    height: 40,
  },
  // Colocar mesma medida do icone, para a logo ficar bem centralizada
  right: {
    width: 20,
    height: 20,
  },
  cover: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 32,
  },
  containerList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: "flex-start",
  },
  emptyListText: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});
