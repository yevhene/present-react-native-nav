import React from 'react'
import { Icon } from 'react-native-elements'
import { TabNavigator } from 'react-navigation'

import { CoursesStack, StudentsStack } from './Routes'

export default TabNavigator({
  Students: {
    screen: StudentsStack,
    navigationOptions: {
      title: 'Студенти',
      tabBarIcon: ({ tintColor, focused }) => (
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
      tabBarIcon: ({ tintColor, focused }) => (
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
