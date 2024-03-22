// DetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native';
import { useState,useEffect } from 'react';

import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../styles/register'
// import { styles } from '../assets/AllStyles/register';

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
      <View style={styles.forms}>
        <Text style={styles.texts}>Registration form</Text>
        <Text style={styles.names}>Name:</Text>
        <TextInput style={styles.label}
           label='Name'
        placeholder="Enter name"
        value={name}
        onChangeText={setname}
      />
      <Text style={styles.names}>Email:</Text>
         <TextInput style={styles.label}
        placeholder="Email"
        value={email}
        onChangeText={setemail}
      />
      <Text style={styles.names}>Password:</Text>
      <TextInput style={styles.label}
        placeholder="Password"
        value={password}
        onChangeText={setpassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.buttons}  onPress={() => navigation.navigate('ViewContent')}>
  <Text style={styles.reg}>Register</Text>
</TouchableOpacity>
      </View>
    
   
<View style={styles.end}>
  <Text>©2024 Smart Irrigation System</Text>
</View>

    </View>
  );
};

export default Register;







