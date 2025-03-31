import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "90%",
    height: 48,
    backgroundColor: "#416AE5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  description: {
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 40,
    fontSize: 16,
  },
});

export default styles;
