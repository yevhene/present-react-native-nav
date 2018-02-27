import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Avatar, Button, Text } from 'react-native-elements'

import students from '../data/students'

export default ({ navigation }) => {
  const { params } = navigation.state;
  const student = students[params.id];

  return (
    <View style={styles.container}>
      <Text h1 contanerStyle={styles.nameContainer}>
        {student.name}
      </Text>

      <Avatar
        xlarge
        contanerStyle={styles.avatarContainer}
        rounded
        source={{uri: student.photo}}
      />

      <Button text="Back"
        onPress={() => navigation.goBack()}
        containerStyle={styles.backButtonContainer}
        buttonStyle={styles.backButton}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    alignItems: 'center'
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  avatarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  backButtonContainer: {
    marginTop: 10
  },
  backButton: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }
});
