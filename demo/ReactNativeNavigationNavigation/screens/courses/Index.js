import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { List, ListItem } from 'react-native-elements'

import courses from 'data/courses'

const CoursesIndex = () =>
  <ScrollView>
    <List containerStyle={styles.list}>
      {
        courses.map((course, i) => (
          <ListItem
            key={i}
            roundAvatar
            avatar={course.cover}
            title={course.name}
            subtitle={course.teacher}
            hideChevron={true}
          />
        ))
      }
    </List>
  </ScrollView>

const styles = StyleSheet.create({
  list: {
    marginTop: 0
  }
})

Navigation.registerComponent('CoursesIndex', () => CoursesIndex)
