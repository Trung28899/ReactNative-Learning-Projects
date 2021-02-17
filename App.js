import React from "react";
import { StyleSheet, View, Text } from "react-native";
import StartApp from "./App/StartApp/StartApp";

export default function App() {
  return (
    <View style={styles.screen}>
      <StartApp />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    color: "#ccc",
    fontSize: 16,
    alignItems: "center",
  },
});
