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
  checkIcon: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    width: 30,
    height: 30
  },
  deleteIcon: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    width: 30,
    height: 40
  },
  todoText: {
    color: "#D9D9D9",
    fontSize: 16,
    maxWidth: "70%",
    textAlign: "center",
  }
});