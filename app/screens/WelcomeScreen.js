import React from 'react';
import { ImageBackground,StyleSheet,View,Image,Text} from 'react-native';

import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/backGround.jpg")}>
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={require("../assets/K-white-logo.png")}/>
                <Text>Welcome to K-commerce</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },

    logoContainer:{
        position:'absolute',
        top:50,
        alignItems:'center'
    },

    logo:{
        width:100,
        height:100,
        position:'absolute',
        top:50,
    },

    loginButton:{
        width:"100%",
        height:50,
        backgroundColor:colors.primary,
    },

    registerButton:{
        width:"100%",
        height:50,
        backgroundColor:colors.secondary,
    }
})

export default WelcomeScreen;