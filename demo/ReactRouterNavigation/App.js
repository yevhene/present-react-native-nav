import React from 'react'
import { StatusBar, View } from 'react-native'
import { NativeRouter, Route, Switch } from 'react-router-native'

import StudentsIndex from './students/Index'
import StudentsShow from './students/Show'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <NativeRouter>
          <Switch>
            <Route exact path="/" component={StudentsIndex} />
            <Route path="/students/:id" component={StudentsShow}/>
          </Switch>
        </NativeRouter>
      </View>
    )
  }
}
