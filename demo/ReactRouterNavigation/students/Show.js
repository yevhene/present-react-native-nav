import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Avatar, Button, Text } from 'react-native-elements'
import { Link } from 'react-router-native'

import students from 'data/students'

const StudentsShow = ({ match }, { router }) => {
  const student = students[match.params.id]

  return (
    <View style={styles.container}>
      <Avatar
        xlarge
        rounded
        source={student.photo}
      />

      <Text h2 style={styles.name}>{student.name}</Text>

      <Text h4>{student.group}</Text>

      <Button
        title="Назад"
        onPress={() => router.history.goBack()}
        buttonStyle={styles.backButton}
      />
    </View>
  )
}

StudentsShow.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      index: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  name: {
    textAlign: 'center'
  },
  backButton: {
    marginTop: 10,
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }
})

export default StudentsShow
