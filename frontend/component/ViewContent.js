import React from "react";
import { useState,useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/viewContent";
import { useNavigation } from "@react-navigation/native";
import {DB,ref,onValue} from '../firebase'
import { snapshotEqual } from "firebase/firestore";
const ViewContent = () => {

  const navigation = useNavigation();
  const[temp,setTemp]=useState('')
  const[himd,setHimid]=useState('')
  const[moist,setPressur]=useState('')
  useEffect(()=>{
    const data=ref(DB)
    onValue(data,(snapshot)=>{
      setTemp(snapshot.val().temp)
      setPressur(snapshot.val().moist)
      setHimid(snapshot.val().humid)
    })
  },[])
  return (
    <View style={styles.main}>
      <Text style={styles.text1}>Weather Condition</Text>
      <View style={styles.main1}>
        <Text style={styles.text2}> Temprature:{temp}</Text>
        <Text style={styles.text2}>Humidity:{himd}</Text>
        <Text style={styles.text2}>pressure:{moist}</Text>
      </View>
      <Text style={styles.text1}>Soil Moisture Levels</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.text3}>Zone A</Text>
          <Text style={styles.text4}>Moisture Level: {moist}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text3}>Zone B</Text>
          <Text style={styles.text4}>Moisture Level:{moist}</Text>
        </View>
      </View>
      <Text style={styles.text1}>Irrigation Status</Text>
      <View style={styles.main2}>
        <Text style={styles.text2}>Status:{moist}</Text>
        <Text style={styles.text2}>Duration:{moist}min</Text>
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
