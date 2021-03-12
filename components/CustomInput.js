import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const CustomInput = (props) => {
  const { onChange } = props;
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Project Name..."
        style={styles.input}
        onChangeText={onChange}
      />
    </View>
  );
};

/*
<TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={onChange}
          value={enteredGoal}
        />

*/

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
  },
  input: {
    fontSize: 13,
    borderColor: "black",
    borderWidth: 1.5,
    marginTop: 10,
    padding: 8,
  },
});

export default CustomInput;
