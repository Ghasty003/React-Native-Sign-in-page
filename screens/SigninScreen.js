import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";

function SigninScreen( props ) {
    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
            <Text style={styles.sign}>Sign In</Text>
            <View style={styles.view}>
                <TextInput placeholderTextColor="#fff" placeholder='Username' style={styles.input}/>
                <TextInput placeholderTextColor="#fff" placeholder='Password' style={styles.input}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        width: "100%",
    },
    sign: {
        fontSize: 40,
        color: "white",
        marginTop: 100
    },
    view: {
        marginTop: 100,
        width: "100%"
    },
    input: {
        backgroundColor: "rgba(250, 250, 250, 0.3)",
        width: "90%",
        height: 50,
        color: "#fff",
        padding: 10,
        fontSize: 16,
        margin: 20
    },
})

export default SigninScreen;