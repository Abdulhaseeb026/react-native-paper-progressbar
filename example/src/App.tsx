import React, { useEffect } from 'react'
import RNPaperProgressBarModule, { Counter } from 'react-native-paper-progressbar'

const App = () => {
  useEffect(() => {
    console.log(RNPaperProgressBarModule)
  })

  return <Counter />
}

export default App
