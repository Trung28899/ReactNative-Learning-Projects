import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "./StartAppStyle";
import Card from "../../components/Card";
import CustomInput from "../../components/CustomInput";
import Colors from "../../constants/colors";
import MainButton from "../../components/MainButton";
import ProjectList from "./ProjectList";

const StartApp = () => {
  const [projectName, setProjectName] = useState("");
  const [editOn, setEditOn] = useState(false);
  const projectList = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
  ];
  const onChangeText = (enteredText) => {
    setProjectName(enteredText);
  };
  return (
    <View style={styles.appContainer}>
      <Card style={styles.card}>
        <Text style={styles.text}>ENTER PROJECT</Text>
        <CustomInput onChange={onChangeText} />
        <View style={styles.buttonContainer}>
          <MainButton
            backgroundColor={Colors.primary}
            projectName={projectName}
            onPress={() => console.log("pressed")}
          >
            Enter
          </MainButton>
          <MainButton
            backgroundColor={editOn ? Colors.danger : Colors.success}
            projectName={projectName}
            onPress={() => setEditOn(!editOn)}
          >
            {editOn ? "Edit Off" : "Edit On"}
          </MainButton>
        </View>
      </Card>
      <Text style={{ ...styles.text, marginTop: 21 }}>Current Projects</Text>
      <ProjectList data={projectList} editOn={editOn} />
    </View>
  );
};

export default StartApp;
