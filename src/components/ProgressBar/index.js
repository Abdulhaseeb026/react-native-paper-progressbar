import * as React from 'react'
import { ProgressBar as PaperProgressBar } from 'react-native-paper'

const ProgressBar = (props) => {
  const { progress, color, loop, visible, time } = props

  const [prog, setProg] = React.useState(0)

  React.useEffect(() => {
    let mul = 1

    if (time) {
      let interval = setInterval(() => {
        let rate = 1 / time
        let updated = rate * mul

        console.log('Progress: ' + parseInt(updated * 100) + '%')

        setProg(updated)
        mul++

        if (updated >= 1) {
          console.log('Removing interval with id: ', interval)
          clearInterval(interval)
        }
      }, 1000)
    }
  }, [])

  let _progress = progress || 0.5
  let _color = color || 'teal'
  let _indeterminate = loop || false
  let _visible = visible || true
  let _time = time || null

  return (
    <PaperProgressBar
      progress={time ? prog : _progress}
      color={_color}
      indeterminate={_indeterminate}
      visible={_visible}
      time={_time}
      {...props}
    />
  )
}

export default ProgressBar
