import React from 'react'
import { View,Text } from 'react-native'
import {styles} from '../styles/viewContent'

const ViewContent = () => {
  //code to fecth the content of the irrigation sytem 
  const data=['25°C','60%','sunny']
  return (
    <View style={styles.main}>
     <Text style={styles.text1}>Weather Condition</Text>

      
      
    </View>
  )
}

export default ViewContent
