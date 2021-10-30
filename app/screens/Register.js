import React from 'react';
import { Text,View,StyleSheet,ImageBackground,TextInput,TouchableOpacity,Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {FontAwesome5,Feather,AntDesign,Ionicons} from "@expo/vector-icons";
import Colors from '../config/Colors';

function Register({navigation}) {
    
    return (
        <ImageBackground style={styles.background}
        source={require("../assets/perC.jpg")}>
            <View style={styles.header}>
                <View style={{flexDirection:"row"}}>
                    <Text style={{marginRight:10,}}>Welcome</Text>
                    <Ionicons name="cart-sharp" size={24} color={Colors.killed} />
                    <Text style={{ fontSize: 30, fontWeight: "bold",color:Colors.killed, }}>K-commerce</Text>
                </View>
            </View>
            <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig">

                {/* enter e-mail */}
                <Text style={styles.text_footer}>E-mail</Text>
                <View style={styles.action}>
                    <FontAwesome5 name="user" size={24} color="black" />
                    <TextInput placeholder="Enter user name" style={styles.textInput} autoCapitalize="none"/>
                </View>

                {/* enter password */}
                <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome5 name="lock" size={24} color="black" />
                    <TextInput placeholder="Enter password" style={styles.textInput} autoCapitalize="none" secureTextEntry={true}/>
                    <Feather name="eye-off" size={24} color="black" />

                </View>

                {/* confirm password */}

                <Text style={[styles.text_footer,{marginTop:35}]}>Confirm password</Text>
                <View style={styles.action}>
                    <FontAwesome5 name="lock" size={24} color="black" />
                    <TextInput placeholder="Password" style={styles.textInput} autoCapitalize="none" secureTextEntry={true}/>
                    <Feather name="eye-off" size={24} color="black" />

                </View>

                <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Items")
                        }}
                        style={{
                        padding: 15,
                        paddingHorizontal: 80,
                        marginTop: 20,
                        alignItems: "center",
                        borderRadius: 10,
                        flexDirection: "row",
                        backgroundColor: "black",
                        }}
                    >
                        <AntDesign name="login" size={24} color="white" />
                        <Text style={{ paddingLeft: 10, color: "white",fontSize:20, }}>Register</Text>
                </TouchableOpacity>

                {/* last Image */}
                <Image resizeMode="stretch" style={[styles.last_image,{marginTop:20,}]} source={require("../assets/sales.jpg")}/>

            </Animatable.View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },

    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        width:"100%",
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor:"#F9F7F7",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        width:"100%",
    },

    text_footer:{
        fontSize:18,
        color:"black",
    },

    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },

    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },

    last_image:{
        width:"100%",
        height:100,
    }
})

export default Register;