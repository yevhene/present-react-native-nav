import React from 'react'
import { List, ListItem } from 'react-native-elements'
import { Link } from 'react-router-native'

import students from 'data/students'

export default () =>
  <List>
    {
      students.map((student, i) => (
        <Link to={`/students/${i}`} key={i}>
          <ListItem
            roundAvatar
            avatar={student.photo}
            title={student.name}
            subtitle={student.group}
          />
        </Link>
      ))
    }
  </List>
