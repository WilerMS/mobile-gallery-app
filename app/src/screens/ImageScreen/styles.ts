import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 750,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  info: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    minHeight: Dimensions.get('window').height
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28
  },
  description: {
    paddingTop: 2,
    paddingLeft: 1,
    fontSize: 16,
    color: 'gray'
  },
  divider: {
    height: 1,
    marginVertical: 20,
    backgroundColor: 'lightgray'
  }

})
