import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, SafeAreaView, StatusBar, Image, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from "axios";

export default class ISSLocation extends Component {
    
    constructor(){
        
        super();
        this.state = {

            location:{ }

        }    
    }

    componentDidMount(){

        this.getApi();

    }

    getApi(){

        axios.get('https://api.wheretheiss.at/v1/satellites/25544')
        .then((response) => {
          
            this.setState({
                location:response.data
            })

        }).catch(error=>{

            alert("Data fetch error");

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../assets/iss_bg.jpg")}
                    style={styles.bg}>
                    <SafeAreaView style={styles.droidSafeArea}>

                        <Text style={[styles.text, { fontSize: 30, color: "#FFFFFF", textAlign: 'center' }]}>ISS Location</Text>
                        <Text>{this.state.location.latitude}</Text>
                        <Text>{this.state.location.longitude}</Text>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("class1")} style={styles.touchableOpacity}>
                            <Text style={styles.text}>Back</Text>
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

    touchableOpacity: {

        alignSelf: 'center',
        backgroundColor: "#FFFFFF",
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderRadius: 50

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


        marginTop: -150,
        marginRight: -150
    },

    text: {

        color: "#000000",
        fontSize: 20,
    }
})
