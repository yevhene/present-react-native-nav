import React from 'react'
import { Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

import CoursesIndex from '../courses/Index'

import StudentsIndex from '../students/Index'
import StudentsShow from '../students/Show'

const CoursesStack = StackNavigator({
  CoursesIndex: {
    screen: CoursesIndex,
    navigationOptions: {
      title: 'Курси'
    }
  }
}, {
  initialRouteName: 'CoursesIndex'
})

const StudentsStack = StackNavigator({
  StudentsIndex: {
    screen: StudentsIndex,
    navigationOptions: {
      title: 'Студенти'
    }
  },
  StudentsShow: {
    screen: StudentsShow,
    navigationOptions: {
      title: 'Студент'
    }
  }
}, {
  initialRouteName: 'StudentsIndex',
})

export { CoursesStack, StudentsStack }
