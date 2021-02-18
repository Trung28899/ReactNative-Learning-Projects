import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./StartAppStyle";
import Card from "../../components/Card";
import CustomInput from "../../components/CustomInput";
import Colors from "../../constants/colors";
import MainButton from "../../components/MainButton";
import ProjectList from "./ProjectList";

const StartApp = () => {
  return (
    <View style={styles.appContainer}>
      <Card style={styles.card}>
        <Text style={styles.text}>ADD NEW / ENTER PROJECT</Text>
        <CustomInput />
        <View style={styles.buttonContainer}>
          <MainButton backgroundColor={Colors.primary}>Enter</MainButton>
          <MainButton backgroundColor={Colors.danger}>Add</MainButton>
        </View>
      </Card>
      <Text style={{ ...styles.text, marginTop: 21 }}>Current Projects</Text>
      <ProjectList />
    </View>
  );
};

export default StartApp;
