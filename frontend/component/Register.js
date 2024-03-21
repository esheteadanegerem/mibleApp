// DetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { useState,useEffect } from 'react';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../assets/AllStyles/register';
import { backurl } from '../globalVariable/variable';
const Register = () => {
  const navigation=useNavigation()
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const sendDataToBackend = async () => {
    try {
      console.log(name)
      const response = await axios.post(`http://${backurl}/register`, {name:name,email:email,password:password});
      console.log('Data sent successfully:', response.data);
      navigation.navigate('ViewContent')
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
  return (

    <View style={styles.main}>
      <TextInput style={styles.label}
        placeholder="Enter name"
        value={name}
        onChangeText={setname}
      />
      <TextInput style={styles.label}
        placeholder="Email"
        value={email}
        onChangeText={setemail}
      />
      <TextInput style={styles.label}
        placeholder="Password"
        value={password}
        onChangeText={setpassword}
      />
      <TouchableOpacity style={styles.buttons} onPress={sendDataToBackend}>
  <Text>Register</Text>
</TouchableOpacity>
    </View>
  );
};

export default Register;







