import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Touchable,
} from "react-native";
import styles from "./StartAppStyle";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constants/colors";

const renderListItem = (itemData) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.itemTitle}>
        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => {
            console.log("pressed");
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 13 }}>
            {itemData.item}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity>
          <AntDesign name="upcircle" size={26} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.faded,
            padding: 5,
            borderRadius: 20,
          }}
        >
          <MaterialIcons name="delete" size={26} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="downcircle" size={26} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProjectList = () => {
  const projects = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
    "Project 6",
    "Project 7",
    "Project 8",
    "Project 9",
    "Project 10",
  ];
  return (
    <View style={styles.listContainer}>
      <FlatList
        keyExtractor={(item) => item}
        data={projects}
        renderItem={renderListItem.bind(this)}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default ProjectList;

// const renderListItem = (projectName, index) => {
//   console.log(projectName);
//   return (
//     <View style={styles.listItem} key={index}>
//       <Text>{projectName}</Text>
//     </View>
//   );
// };

/* <ScrollView contentContainerStyle={styles.list}>
        {projects.map((projectName, index) =>
          renderListItem(projectName, index)
        )}
      </ScrollView> */
