import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MainButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        console.log("pressed");
      }}
    >
      <View
        style={{
          backgroundColor: props.backgroundColor || "black",
          ...styles.button,
        }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 13,
  },
});

export default MainButton;
