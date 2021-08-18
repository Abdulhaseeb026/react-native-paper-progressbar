import React from 'react'
import { View } from 'react-native'
import ProgressBar from 'react-native-paper-progressbar'

const App = () => {
  return (
    <View style={styles.root}>
      <ProgressBar />
    </View>
  )
}

const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 18,
  },
}

export default App
