import React from 'react';
import { Text,View,StyleSheet,ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';

function Items(props) {
    return (
        <ImageBackground style={styles.background}
        source={require("../assets/perC.jpg")}>
            <View style={styles.header}>
                <Text>Welcome</Text>
            </View>
            <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig">
                <Text>Footer</Text>
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
        backgroundColor: '#f58787',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        width:"100%",
    },
})

export default Items;