import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import  WelcomeScreen from './screens/WelcomeScreen';
import  LoginScreen from './screens/LoginScreen';
import  StudentSignUpScreen from './screens/StudentSignUpScreen';
import  HomeScreen from './screens/HomeScreen';
import  WP from './screens/WP';
import ClassScreen from './screens/ClassScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

var AppNavigator = createSwitchNavigator({
 
  
  WelcomeScreen : WelcomeScreen,
  LoginScreen : LoginScreen,
  StudentSignUpScreen : StudentSignUpScreen,
  WP : WP,
  HomeScreen : HomeScreen,
 

})
const AppContainer = createAppContainer(AppNavigator)
