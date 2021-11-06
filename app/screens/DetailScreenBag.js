import React from 'react';
import { Text,View,StyleSheet,ImageBackground,TextInput,TouchableOpacity,Image, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Fontisto,AntDesign} from "@expo/vector-icons";
import Colors from '../config/Colors';

export function DetailScreenBag({navigation}) {
    
    return (
        <ImageBackground style={styles.background}
        source={require("../assets/hangerBox.jpg")}>
            <View style={styles.header}>
                <View>
                    <Image style={{width:600,height:160,}} resizeMode={"contain"} source={require("../assets/bag.jpg")} />
                </View>
            </View>
            <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig">
                <View style={styles.nameContainer}>
                    <Text style={styles.itemName}>Ladies Bag</Text>
                    <Text style={styles.priceText}>$400</Text>
                </View>

                <View style={styles.aboutContainer}>
                    <Text style={[styles.aboutText,{marginBottom:10,}]}>Description</Text>
                    <Text>A bucket bag is exactly what the name sounds like. The bag part is in the form of a bucket, with a little less cylindrical shape. It's usually attached to a shoulder strap but can also be attached to a hand strap. The top part is left open or secured by a zipper.</Text>
                </View>

                <View style={styles.addText}>
                    <Text style={{color:"lightgrey",fontSize:17,}}>Add to cart</Text>
                    <AntDesign name="down" size={24} color="black" />
                </View>

                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate("AddToCart");
                    }}
                style={styles.addContainer}>
                    <Fontisto name="shopping-basket-add" size={30} color="gold" />
                </TouchableOpacity>

                <Text style={styles.moreItems}>More items</Text>

                <View style={styles.itemImageContainer}>
                <TouchableOpacity >
                        <Image style={[styles.imageView,{width:600,height:140,}]} resizeMode={"contain"} source={require("../assets/FTYbag.jpg")} />
                </TouchableOpacity>

                <TouchableOpacity >
                        <Image style={[styles.imageView,{width:600,height:140,}]} resizeMode={"contain"} source={require("../assets/FTYbag2.jpg")} />
                </TouchableOpacity>
                </View>
            </Animatable.View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
    },

    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        paddingBottom:10,
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

    nameContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
    },

    priceText:{
        fontSize:25,
        backgroundColor:"red",
    },

    itemName:{
        fontSize:20,
        fontWeight:"bold",
    },

    aboutContainer:{
        marginTop:20,
    },

    aboutText:{
        color:"lightgrey",
        fontSize:17,
    },

    addText:{
        flexDirection:"row",
        justifyContent:"flex-end",
        marginTop:10,
        paddingRight:20,
    },
    addContainer:{
        flexDirection:"row",
        justifyContent:"flex-end",
        paddingRight:20,
    },

    moreItems:{
        color:Colors.primary,
        marginTop:30,
        marginBottom:10,
    },

    itemImageContainer:{
        flexDirection:"row",
        justifyContent:'space-around',
        
    },

})

export default DetailScreenBag;