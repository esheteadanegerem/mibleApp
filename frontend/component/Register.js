import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, Text } from 'react-native';
import { TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/register';
import { FIREBASE_AUTH } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
const Register = () => {
  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
const auth=FIREBASE_AUTH
  const handleRegister = async() => {
    try{
      const user=await createUserWithEmailAndPassword(auth,email,password)
      console.log(user)
      alert('u are rgisiterd')
      navigation.navigate('ViewContent');
    }
    catch(err){
      console.log('error occure')

    }

   
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
