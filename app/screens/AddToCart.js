import React from 'react';
import { ScrollView,StyleSheet,Text,View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

function AddToCart(props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Animatable.View animation="slideInDown" iterationCount="infinite" direction="alternate"style={{flexDirection:"row"}}>
                <Text style={{color:"#F4BB44"}} >Add to cart</Text>
                <FontAwesome name="shopping-bag" size={24} color="white" style={{marginLeft:10,}} />
                </Animatable.View>
                <Animatable.View
                animation="shake" 
                 style={styles.iconView}>
                    <FontAwesome name="shopping-cart" size={40} color="#F4BB44" />
                </Animatable.View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"black"
    },

    iconView:{
        position:"absolute",
        left:70,
        top:40
    },
})

export default AddToCart;