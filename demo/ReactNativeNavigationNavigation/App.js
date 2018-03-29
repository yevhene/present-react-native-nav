import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import './screens/courses/Index'
import './screens/students/Index'
import './screens/students/Show'

export default class App {
  constructor() {
    this.loadIcons()
      .then(() => this.start())
  }

  loadIcons() {
    this.icons = {}
    return Promise.all([
      Icon.getImageSource('people', 30).then(icon => this.icons.people = icon),
      Icon.getImageSource('people-outline', 30).then(icon => this.icons.peopleOutline = icon),
      Icon.getImageSource('label', 30).then(icon => this.icons.label = icon),
      Icon.getImageSource('label-outline', 30).then(icon => this.icons.labelOutline = icon),
    ])
  }

  start() {
    Navigation.startTabBasedApp({
      tabs: [{
        label: 'Студенти',
        screen: 'StudentsIndex',
        icon: this.icons.peopleOutline,
        selectedIcon: this.icons.people,
        title: 'Студенти'
      }, {
        label: 'Курси',
        screen: 'CoursesIndex',
        icon: this.icons.labelOutline,
        selectedIcon: this.icons.label,
        title: 'Курси'
      }]
    })
  }
}
