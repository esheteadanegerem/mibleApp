import React from 'react';
import { View, Text, Button ,Row,Image,ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles/homeScreen';
import image from '../assets/image/hom1.jpeg'
import image1 from '../assets/image/home2.jpeg'
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     <View style={styles.container1}>
      <View style={styles.inner}>
        <Text style={styles.inner1}>Let Us make our farmer digital worker</Text>
      </View>
     <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
     </View>
     <View style={styles.container2}>
     
      <ImageBackground  style={styles.images} source={image}>
     
           <Text style={styles.imagetext}> Effortlessly manage your irrigation system with our intuitive mobile app for surplus production</Text>
          <Image style={styles.image1}
           source={image1}/>
     
      </ImageBackground>
      
   
      </View>
     
    </View>
  );
};

export default HomeScreen;
