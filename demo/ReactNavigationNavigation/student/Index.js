import React from 'react'
import { List, ListItem } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'

import students from '../data/students'

const StudentIndex = ({ navigation }) =>
  <List style={styles.list}>
    {
      students.map((student, i) => (
        <ListItem
          key={i}
          roundAvatar
          avatar={{uri:student.photo}}
          title={student.name}
          subtitle={student.group}
          onPress={() => navigation.navigate('StudentShow', { id: i })}
        />
      ))
    }
  </List>

StudentIndex.navigationOptions = {
  title: 'Students'
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})

export default StudentIndex
