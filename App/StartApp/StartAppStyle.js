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
    width: "70%",
    paddingTop: 10,
  },
  buttonStyle: {
    padding: 100,
  },
  listItem: {
    borderWidth: 2,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  listContainer: {
    flex: 1,
    width: "75%",
    marginTop: 5,
  },
  list: {
    flexGrow: 1,
  },
  touchableStyle: {
    paddingHorizontal: 35,
    paddingVertical: 10,
  },
  itemTitle: {
    width: "65%",
    alignItems: "flex-end",
  },
  buttonSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "40%",
  },
  iconSection: {
    width: "10%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default styles;

/*

listItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },

*/
