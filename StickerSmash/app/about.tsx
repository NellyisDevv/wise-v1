import { Text, View, StyleSheet } from 'react-native'

/*

Assignment

1. Import a button that takes you back to
the home page

*/

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>About Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  Text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
})
