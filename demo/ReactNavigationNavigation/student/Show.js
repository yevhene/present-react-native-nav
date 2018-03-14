import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Avatar, Button, Text } from 'react-native-elements'

import students from '../data/students'

const StudentShow = ({ navigation }) => {
  const { params } = navigation.state
  const student = students[params.id]

  return (
    <View style={styles.container}>
      <Text h1>{student.name}</Text>

      <Avatar
        xlarge
        rounded
        source={{uri: student.photo}}
      />

      <Text h4>{student.group}</Text>
    </View>
  )
}

StudentShow.navigationOptions = {
  title: 'Student Details'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})

export default StudentShow
