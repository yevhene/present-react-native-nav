import React from 'react'
import { List, ListItem } from 'react-native-elements'
import { StyleSheet } from 'react-native'

import students from '../data/students'

export default ({ navigation }) =>
  <List containerStyle={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    height: 100
  }
});
