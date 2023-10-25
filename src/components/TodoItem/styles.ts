import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    backgroundColor: "#262626",
    borderRadius: 8,
    border: "1px solid #333333",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  todoText: {
    color: "#D9D9D9",
    fontSize: 16,
    maxWidth: "70%",
    textAlign: "center",
  }
});