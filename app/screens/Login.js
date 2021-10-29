import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity,ImageBackground,StyleSheet } from "react-native";
import { AntDesign,Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Login(props) {
  const navigation = props.navigation;
  return (
    <ImageBackground 
    style={styles.background}
    source={require("../assets/full.jpg")}>
        {/* <View
        style={{
            backgroundColor: "white",
            flex: 1,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
        }}
        > */}
        {/* <Image
            style={{
            //   transform: [{ rotate: "45deg" }],
            borderRadius: 20,
            marginBottom: 60,
            width: 200,
            height: 200,
            }}
            source={require("../assets/hat.jpg")
            //   uri: "https://images.unsplash.com/photo-1633114127188-99b4dd741180?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
            }
        /> */}
        <Text style={{ fontSize: 20, color: "grey" }}>Welcome to</Text>
        <View style={{flexDirection:"row"}}>
        <Ionicons name="cart-sharp" size={24} color={Colors.primary} />
        <Text style={{ fontSize: 30, fontWeight: "bold",color:colors.primary, }}>K-commerce</Text>
        </View>
        <View style={{}}>
            <TextInput
            style={{
                padding: 15,
                borderRadius: 10,
                borderWidth: 0.7,
                paddingHorizontal: 60,
                backgroundColor:"white",
                marginTop:10,
            }}
            placeholder="Enter your username"
            />
        </View>
        <View style={{ marginTop: 10,}}>
            <TextInput
            secureTextEntry={true}
            onChangeText={(
                e
            )=> {
                console.log(e)
            }}
            style={{
                padding: 15,
                borderRadius: 10,
                borderWidth: 0.7,
                paddingHorizontal: 60,
                backgroundColor:"white",
            }}
            placeholder="Enter your password"
            />
        </View>
        <TouchableOpacity
            onPress={() => {
            navigation.navigate("Items");
            }}
            style={{
            padding: 15,
            paddingHorizontal: 80,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
            backgroundColor: "black",
            }}
        >
            <AntDesign name="login" size={24} color="white" />
            <Text style={{ paddingLeft: 10, color: "white" }}>Login</Text>
        </TouchableOpacity>
        {/* </View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        paddingHorizontal: 20,
        justifyContent: "center",
        
    },
    
})