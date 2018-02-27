import React from 'react'
import { StatusBar, View } from 'react-native'

import Navigator from './Navigator'


export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <Navigator />
      </View>
    )
  }
}
