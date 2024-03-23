import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/viewContent";
import { useNavigation } from "@react-navigation/native";
const ViewContent = () => {
  //code to fecth the content of the irrigation sytem
  const navigation = useNavigation();
  const data = ["25°C", "60%", "sunny"];
  const moisterLevel = ["75%", "80%"];
  const Status = ["active", 60];
  return (
    <View style={styles.main}>
      <Text style={styles.text1}>Weather Condition</Text>
      <View style={styles.main1}>
        <Text style={styles.text2}> Temprature:{data[0]}</Text>
        <Text style={styles.text2}>Humidity:{data[1]}</Text>
        <Text style={styles.text2}>forcast:{data[2]}</Text>
      </View>
      <Text style={styles.text1}>Soil Moisture Levels</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.text3}>Zone A</Text>
          <Text style={styles.text4}>Moisture Level: {moisterLevel[0]}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text3}>Zone B</Text>
          <Text style={styles.text4}>Moisture Level:{moisterLevel[1]}</Text>
        </View>
      </View>
      <Text style={styles.text1}>Irrigation Status</Text>
      <View style={styles.main2}>
        <Text style={styles.text2}>Status:{Status[0]}</Text>
        <Text style={styles.text2}>Duration:{Status[1]}min</Text>
      </View>
      <TouchableOpacity
        style={styles.touch1}
        onPress={() => navigation.navigate("Control System")}
      >
        <Text style={styles.text5}>Manual Control</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewContent;
