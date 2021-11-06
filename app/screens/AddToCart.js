import React from 'react';
import { ScrollView,StyleSheet,Text,View } from "react-native";

function AddToCart(props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Text>Add to cart</Text>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
})

export default AddToCart;