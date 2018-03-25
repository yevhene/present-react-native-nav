import React from 'react'
import { Icon } from 'react-native-elements'
import { DrawerNavigator } from 'react-navigation'

import { CoursesStack, StudentsStack } from './Routes'

export default DrawerNavigator({
  Students: {
    screen: StudentsStack,
    navigationOptions: {
      title: 'Студенти',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'people' : 'people-outline'}
          color={tintColor}
        />
      )
    }
  },
  Courses: {
    screen: CoursesStack,
    navigationOptions: {
      title: 'Курси',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'label' : 'label-outline'}
          color={tintColor}
        />
      )
    }
  }
}, {
  initialRouteName: 'Students'
})
