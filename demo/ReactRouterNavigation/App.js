import React from 'react'
import { StatusBar, View } from 'react-native'
import { NativeRouter, Route, Switch } from 'react-router-native'

import StudentIndex from './student/Index'
import StudentShow from './student/Show'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <NativeRouter>
          <Switch>
            <Route exact path="/" component={StudentIndex} />
            <Route path="/students/:id" component={StudentShow}/>
          </Switch>
        </NativeRouter>
      </View>
    )
  }
}
