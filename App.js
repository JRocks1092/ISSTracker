import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import ISSLocation from "./Screens/ISSLocation";
import Meteor from "./Screens/Meteor";
import HomeScreen from "./Screens/HomeScreen";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Appcontainer />
      </View>
    )
  }
}

var switchContainer = createSwitchNavigator({
  class1: HomeScreen,
  class2: ISSLocation,
  class3: Meteor
})
const Appcontainer = createAppContainer(switchContainer)