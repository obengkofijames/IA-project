import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImage from './app/screens/ViewImage';
import Login from './app/screens/Login';
import Register from './app/screens/Register';
import Items from './app/screens/Items';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
          <MainNavigator.Navigator screenOptions={{headerShown:false}}>
            <MainNavigator.Screen name="Welcome to K-commerce" component={WelcomeScreen}/>
            <MainNavigator.Screen name="ViewImage" component={ViewImage}/>
            <MainNavigator.Screen name="Login" component={Login}/>
            <MainNavigator.Screen name="Register" component={Register}/>
            <MainNavigator.Screen name="Items" component={Items}/>
          </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
};
