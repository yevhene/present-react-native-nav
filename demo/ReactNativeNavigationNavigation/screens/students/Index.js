import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { List, ListItem } from 'react-native-elements'

import students from 'data/students'

const StudentsIndex = ({ navigator }) =>
  <ScrollView>
    <List containerStyle={styles.list}>
      {
        students.map((student, i) => (
          <ListItem
            key={i}
            roundAvatar
            avatar={student.photo}
            title={student.name}
            subtitle={student.group}
            onPress={() => navigator.push({
              screen: 'StudentsShow',
              title: 'Студент',
              passProps: { id: i }
            })}
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

Navigation.registerComponent('StudentsIndex', () => StudentsIndex)
