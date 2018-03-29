import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Avatar, Text } from 'react-native-elements'

import students from 'data/students'

const StudentsShow = ({ id }) => {
  const student = students[id]

  return (
    <View style={styles.container}>
      <Avatar
        xlarge
        rounded
        source={student.photo}
      />

      <Text h2 style={styles.name}>{student.name}</Text>

      <Text h4>{student.group}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  name: {
    textAlign: 'center'
  }
})

Navigation.registerComponent('StudentsShow', () => StudentsShow)
