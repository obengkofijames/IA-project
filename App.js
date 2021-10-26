import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import {useDimensions}from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImage from './app/screens/ViewImage';

export default function App() {
  console.log(useDimensions());
  return <WelcomeScreen/>;
};