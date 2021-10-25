import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Platform,View,Dimensions,SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor:"#5C5858",
        width:"100%",
        height:"30%",
      }}>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems:"center",
  },
});
