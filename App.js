import React from "react";
import { StyleSheet, View, Text } from "react-native";
import StartApp from "./App/StartApp/StartApp";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Learning App" />
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
