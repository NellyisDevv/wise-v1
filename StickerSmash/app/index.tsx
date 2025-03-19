import { Text, View, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Link href='/about' style={styles.button}>
        About
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
  },
  button: {
    color: '#25292e',
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 8,
  },
})
