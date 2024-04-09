import React,{useState,useEffect} from 'react'
import { View } from 'react-native'
import { TextInput,TouchableOpacity ,Text,Image} from 'react-native'

import { useNavigation } from '@react-navigation/native';
import {loginStyles} from '../assets/AllStyles/login'
import login from '../assets/image/login.jpeg'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebase';


const Login = () => {
  const navigation=useNavigation()
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const auth=FIREBASE_AUTH
    const handleLogin= async () => {
      try{
        const loinUser=await signInWithEmailAndPassword(auth,email,password)
        console.log('user login')
        navigation.navigate('ViewContent')
      }
      catch(err){
        console.log(err,'error during login page')
        alert('invalid credintails')
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
    <TouchableOpacity style={loginStyles.buttons} onPress={handleLogin}>
<Text style={loginStyles.logged}>Login</Text>
</TouchableOpacity>
  </View>
  )
}

export default Login
