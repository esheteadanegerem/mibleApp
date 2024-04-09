import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, Text } from 'react-native';
import { TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/register';
import { auth } from '../firebase';
import { backurl } from '../globalVariable/variable';



const Register = () => {
  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleRegister = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        // Navigate to the "ViewContent" screen after successful registration
        navigation.navigate('ViewContent');
      })
      .catch((err) => {
        alert('An error occurred during registration');
      });
  };

  return (
    <View style={styles.main}>
      <View style={styles.forms}>
        <Text style={styles.texts}>Registration form</Text>
        <Text style={styles.names}>Email:</Text>
        <TextInput
          style={styles.label}
          placeholder="Email"
          value={email}
          onChangeText={setemail}
        />
        <Text style={styles.names}>Password:</Text>
        <TextInput
          style={styles.label}
          placeholder="Password"
          value={password}
          onChangeText={setpassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.buttons} onPress={handleRegister}>
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
