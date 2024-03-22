import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './component/HomeScreen';
import Register from './component/Register';
import Login from './component/Login';
import ControlSystem from './component/ControlSystem';
import ViewContent from './component/ViewContent';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
    <Stack.Navigator initialRouteName="Home "  >
      <Stack.Screen name="well come to control irrigation" component={HomeScreen} style={styles.home}/>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name='system information' component={ViewContent}/>
      <Stack.Screen name='mointor sytem' component={ControlSystem}/>
    </Stack.Navigator>
    
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home:{
    alignContent:'center',
    textAlign:'center',
    backgroundColor:'blue'
  }
});
