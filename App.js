import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImage from './app/screens/ViewImage';
import Login from './app/screens/Login';
import Register from './app/screens/Register';
import Items from './app/screens/Items';
import DetailScreen from './app/screens/DetailScreen';
import DetailScreenDress from './app/screens/DetailScreenDress';
import DetailScreenBag from './app/screens/DetailScreenBag';
import DetailScreenAfrican from './app/screens/DetailScreenAfrican';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() {
  const Drawer = createDrawerNavigator();
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
            <MainNavigator.Screen name="DetailScreen" component={DetailScreen}/>
            <MainNavigator.Screen name="DetailScreenDress" component={DetailScreenDress}/>
            <MainNavigator.Screen name="DetailScreenBag" component={DetailScreenBag}/>
            <MainNavigator.Screen name="DetailScreenAfrican" component={DetailScreenAfrican}/>

          </MainNavigator.Navigator>

      </NavigationContainer>
    </View>
  );
};


// const Drawer = () =>{
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//       <Drawer.Screen name="ViewImage" component={ViewImage} />
//       <Drawer.Screen name="Register" component={Register} />
//     </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }
