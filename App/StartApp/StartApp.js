import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./StartAppStyle";
import Card from "../../components/Card";
import CustomInput from "../../components/CustomInput";
import Colors from "../../constants/colors";
import MainButton from "../../components/MainButton";

const StartApp = () => {
  return (
    <View style={styles.appContainer}>
      <Card style={styles.card}>
        <Text style={styles.text}>ADD NEW / ENTER PROJECT</Text>
        <CustomInput />
        <View style={styles.buttonContainer}>
          <MainButton backgroundColor={Colors.primary}>Search</MainButton>
          <MainButton backgroundColor={Colors.danger}>Add</MainButton>
        </View>
      </Card>
    </View>
  );
};

export default StartApp;
