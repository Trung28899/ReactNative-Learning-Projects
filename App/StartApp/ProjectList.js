import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./StartAppStyle";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constants/colors";

const renderListItem = (itemData, editOn) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(editOn);
      }}
    >
      <View style={styles.listItem}>
        <View style={styles.itemTitle}>
          <TouchableOpacity style={styles.touchableStyle}>
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>
              {itemData.item}
            </Text>
          </TouchableOpacity>
        </View>
        {editOn ? (
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
        ) : (
          <View style={styles.iconSection}>
            <TouchableOpacity>
              <AntDesign name="rightcircle" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const ProjectList = ({ data, editOn }) => {
  const projects = data;
  return (
    <View style={styles.listContainer}>
      <FlatList
        keyExtractor={(item) => item}
        data={projects}
        renderItem={(itemData) => {
          return renderListItem(itemData, editOn);
        }}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default ProjectList;
