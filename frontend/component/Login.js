import React,{useState,useEffect} from 'react'
import { View } from 'react-native'
import { TextInput,TouchableOpacity ,Text,Image} from 'react-native'
import {axios} from 'axios'
import { useNavigation } from '@react-navigation/native';
import {loginStyles} from '../assets/AllStyles/login'
//import { useNavigation } from 'expo-router';
import { backurl } from '../globalVariable/variable'
import login from '../assets/image/login.jpeg'
import { styles } from '../styles/scheduleManagment';


const Login = () => {
  const navigation=useNavigation()
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const sendDataToBackend = async () => {
        try {
          const response = await axios.post(`http://${backurl}/register`, {email:email,password:password});
          console.log('Data sent successfully:', response.data);
          navigation.navigate('ViewContent')
         
        } catch (error) {
          console.error('Error sending data:', error);
        }
      };
  return (

    <View style={loginStyles.main}>
   <Image style={loginStyles.image} source={login}/>
    <TextInput style={loginStyles.label}
      placeholder="Email"
      
      value={email}
      onChangeText={setemail}
    />
    <TextInput style={loginStyles.label}
      placeholder="Password"
      value={password}
      onChangeText={setpassword}
    />
    <TouchableOpacity style={loginStyles.buttons} onPress={() => navigation.navigate('ViewContent')}>
<Text style={loginStyles.logged}>Login</Text>
</TouchableOpacity>
  </View>
  )
}

export default Login
