import React from 'react'
import { StackNavigator } from 'react-navigation'

import CoursesIndex from '../courses/Index'

import StudentsIndex from '../students/Index'
import StudentsShow from '../students/Show'

const CoursesStack = StackNavigator({
  CoursesIndex: {
    screen: CoursesIndex
  }
}, {
  initialRouteName: 'CoursesIndex'
})

const StudentsStack = StackNavigator({
  StudentsIndex: {
    screen: StudentsIndex
  },
  StudentsShow: {
    screen: StudentsShow
  }
}, {
  initialRouteName: 'StudentsIndex',
})

export { CoursesStack, StudentsStack }
