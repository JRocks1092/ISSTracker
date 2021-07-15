import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground,Platform, SafeAreaView, StatusBar, Image } from 'react-native';

export default class Meteor extends Component {
    render() {
        return (
            <View style={styles.container}>
            <ImageBackground
                source={require("../assets/meteor_bg.jpg")}
                style={styles.bg}>
                <SafeAreaView style={styles.droidSafeArea}>

                    <Text style = {[ styles.text, { fontSize:30, color:"#FFFFFF", textAlign:'center' } ]}>Meteors</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("class1")} style = {styles.touchableOpacity}>
                            <Text style = {styles.text}>Back</Text>                        
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
    width:100,
    height:50,
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
   /*
    scaleX:0.3,
    scaleY:0.3, */
    marginTop:-150,
    marginRight:-150               
},

text: {

    color: "#000000",        
    fontSize:20,        
}
})
