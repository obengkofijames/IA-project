import React from 'react';
import{Image,StyleSheet, View} from 'react-native';

import Colors from '../config/Colors';

function ViewImage() {
    return (
        <View style={styles.container}>
            <View style={styles.closeButton}/>
            <View style={styles.deleteButton}/>

            <Image 
            resizeMode="contain"
            style={styles.images}
            source={require("../assets/dress.jpg")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    images:{
        width:"100%",
        height:"100%",
        position:"absolute",
        top:10,
    },

    container:{
        backgroundColor:"#000",
        flex:1,
    },

    closeButton:{
        width:50,
        height:30,
        backgroundColor:Colors.primary,
        position:"absolute",
        top:30,
        left:20,
    },

    deleteButton:{
        width:50,
        height:30,
        backgroundColor:Colors.secondary,
        position:"absolute",
        top:30,
        right:20,
    },
    
})
export default ViewImage;