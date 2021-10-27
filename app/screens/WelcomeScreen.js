import React from 'react';
import { ImageBackground,StyleSheet,View,Image,Text} from 'react-native';

import colors from '../config/colors';

function WelcomeScreen() {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/backGround.jpg")}>
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={require("../assets/K-white-logo.png")}/>
                {/* <Text>Welcome to K-commerce</Text> */}
            </View>
            <View style={styles.loginButton}>
                <Text style={styles.loginText}>Login</Text>
            </View>
            <View style={styles.registerButton}>
                <Text style={styles.RegisterText}>Register</Text>
            </View>

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
        top:0,
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
    },

    loginText:{
        fontSize:20,
        position:'absolute',
        top:10,
        left:160,
        alignItems:'center'
    },

    RegisterText:{
        fontSize:20,
        position:'absolute',
        top:10,
        left:150,
        alignItems:'center'
    }
})

export default WelcomeScreen;