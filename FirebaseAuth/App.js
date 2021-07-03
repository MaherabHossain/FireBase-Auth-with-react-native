import React,{Component} from 'react'
import {View,Text,LogBox } from 'react-native'
import { Appbar,TextInput,Button } from 'react-native-paper';
import firebase from './config'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Loading from './screens/Loading'
import Signup from './screens/Signup'
import Login from './screens/Login'
const Stack = createStackNavigator();
LogBox.ignoreLogs(['Setting a timer']);



export default App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Loading' component={Loading}  />
      <Stack.Screen name='Login' component={Login}  />
       <Stack.Screen name='Signup' component={Signup} />
       <Stack.Screen name='Home' component={Home}  />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

