import React from "react";
import { View,StyleSheet,Text,TouchableOpacity, FlatList,ImageBackground, _View} from "react-native";


export default function Items(props) {
    return (
        <View style={styles.container}>

            <View style={styles.card}>
                <View style={styles.inner}>
                    <ImageBackground resizeMode={"contain"} style={styles.background}
                        source={require("../assets/pinkT.jpg")}>
                    </ImageBackground>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.inner}>
                    <ImageBackground resizeMode={"contain"} style={styles.background}
                        source={require("../assets/dress.jpg")}>
                    </ImageBackground>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.inner}>
                    <ImageBackground resizeMode={"contain"} style={styles.background}
                        source={require("../assets/bag.jpg")}>
                    </ImageBackground>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.inner}>
                    <ImageBackground resizeMode={"contain"} style={styles.background}
                        source={require("../assets/african.jpg")}>
                    </ImageBackground>
                </View>
            </View>
            

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
    }

})