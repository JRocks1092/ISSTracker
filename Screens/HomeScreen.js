import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, SafeAreaView, StatusBar, Image, Platform } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../assets/bg_image.png")}
                    style={styles.bg}>
                    <SafeAreaView style={styles.droidSafeArea}>

                        <Text style = {[ styles.text, { fontSize:30, color:"#FFFFFF", textAlign:'center' } ]}>ISS Tracker App</Text>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("class2") } style = {styles.touchableOpacity}>
                            <Image source={require("../assets/iss_icon.png")} style={styles.image} />
                            <Text style = {[styles.text, {marginTop:-200}]}>ISS Location</Text>
                            <Text style = {[styles.text, {color:"red", fontSize:10}]}>Know More-</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("class3")} style = {styles.touchableOpacity}>
                            <Image source={require("../assets/meteor_icon.png")} style={[styles.image,{ /*scaleX:0.7, scaleY:0.7,*/ marginTop:-100 }]}/>
                            <Text style = {styles.text}>Meteors</Text>
                            <Text style = {[styles.text, {color:"red", fontSize:10}]}>Know More-</Text>
                        </TouchableOpacity>

                    </SafeAreaView>
                </ImageBackground>
            </View >
        )
    }
}


const styles = StyleSheet.create({

    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    container: {
        flex: 1,
    },

    touchableOpacity:{

        alignSelf:'center',
        backgroundColor:"#FFFFFF",
        width:300,
        height:200,
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
        borderRadius:50

    },

    heading: {

        color: "#661111",
        alignSelf: "center",
        fontSize: 40,
        fontFamily: "cursive"

    },

    textInput: {

        borderWidth: 3,
        borderRadius: 20,
        width: 200,
        marginTop: 50,
        alignSelf: "center",
        textAlign: "center",
        fontFamily: "cursive"

    },

    bg: {

        flex: 1,
        resizeMode: 'cover'
    },

    image: {
       
       /* scaleX:0.3,
        scaleY:0.3, 
        marginTop:-150,
        marginRight:-150  */             
    },

    text: {

        color: "#000000",        
        fontSize:40,        
    }
})
