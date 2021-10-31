import React from "react";
import { View,StyleSheet,Text,TouchableOpacity,ImageBackground,} from "react-native";
import Colors from "./Colors";
import { AntDesign } from '@expo/vector-icons';


export default function Clothes(props) {
    return (
        <View style={styles.container}>
            
            
            <TouchableOpacity 
            style={styles.card}>
                <View style={styles.inner}>
                    <ImageBackground resizeMode={"contain"} style={styles.background}
                        source={require("../assets/pinkT.jpg")}>
                            <View style={styles.textContainer}>
                                <Text>$400</Text>
                                <AntDesign name="heart" size={24} color={Colors.primary} />
                            </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <View style={styles.inner}>
                    <ImageBackground resizeMode={"contain"} style={styles.background}
                        source={require("../assets/dress.jpg")}>
                            <View style={styles.textContainer}>
                                <Text>$400</Text>
                                <AntDesign name="heart" size={24} color={Colors.primary} />
                            </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <View style={styles.inner}>
                    <ImageBackground resizeMode={"contain"} style={styles.background}
                        source={require("../assets/bag.jpg")}>
                            <View style={styles.textContainer}>
                                <Text>$400</Text>
                                <AntDesign name="heart" size={24} color={Colors.primary} />
                            </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <View style={styles.inner}>
                    <ImageBackground resizeMode={"contain"} style={styles.background}
                        source={require("../assets/african.jpg")}>
                            <View style={styles.textContainer}>
                                <Text>$400</Text>
                                <AntDesign name="heart" size={24} color={Colors.primary} />
                            </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        width:"100%",
        height:"85%",
        padding:5,
        flexDirection:"row",
        flexWrap:"wrap",

    },

    background:{
        width:"100%",
        height:"100%",
    },

    card:{
        width:"50%",
        height:"50%",
        padding:5,
        

    },
    inner:{
        flex:1,
        borderRadius:10,
        backgroundColor:"lightgrey",
        alignItems:"center",
        justifyContent:"center",
    },

    textContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-end",
        padding:5,
    },

    innerText:{
        color:Colors.killed,
        fontSize:20,
    },

})