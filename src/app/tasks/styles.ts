import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  input: {
    width: "60%",
    height: 40,
    backgroundColor: "white",
    paddingHorizontal: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
  },
  taskDescription: {
    borderBottomWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
});
