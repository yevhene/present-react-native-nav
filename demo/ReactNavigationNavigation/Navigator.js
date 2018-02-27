import React from 'react'
import { StackNavigator } from 'react-navigation'

import StudentIndex from './student/Index'
import StudentShow from './student/Show'

export default StackNavigator({
  StudentIndex: { screen: StudentIndex },
  StudentShow: { screen: StudentShow }
}, {
  initialRouteName: 'StudentIndex'
})
