import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./StartAppStyle";
import { AntDesign } from "@expo/vector-icons";

const renderListItem = (itemData, editOn) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(itemData.item.id);
      }}
    >
      <View style={styles.listItem}>
        <View style={styles.itemTitle}>
          <TouchableOpacity style={styles.touchableStyle}>
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>
              {itemData.item.name}
            </Text>
          </TouchableOpacity>
        </View>
        {editOn ? (
          <View style={styles.buttonSection}>
            <TouchableOpacity>
              <AntDesign name="upcircle" size={26} color="black" />
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
        keyExtractor={(item) => item.id.toString()}
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
