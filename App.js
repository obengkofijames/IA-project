import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImage from './app/screens/ViewImage';
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
          </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
};
