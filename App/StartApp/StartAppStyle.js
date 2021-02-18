import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    fontSize: 30,
    paddingTop: 30,
    alignItems: "center",
  },
  text: {
    color: Colors.black,
    fontWeight: "bold",
    fontSize: 13,
  },
  card: {
    width: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    paddingTop: 10,
  },
  buttonStyle: {
    padding: 100,
  },
});

export default styles;
