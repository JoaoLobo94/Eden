import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  logocontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
  input: {
    width: "90%",
    marginBottom: 15,
    color: "black",
    fontSize: 17,
    borderRadius: 7,
    padding: 15,
    borderWidth: 1,
    borderColor: "#3337",
  },
  submitbutton: {
    backgroundColor: "#35AAFF",
    width: "90%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 7,
  },
  submittext: {
    color: "#FFF",
    fontSize: 18,
  },
  title: {
    fontSize: 55,
    fontWeight: "bold",
    color: "#6e5494",
    marginBottom: 30,
  },
});
