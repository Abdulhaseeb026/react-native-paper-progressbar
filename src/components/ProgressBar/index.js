import * as React from 'react'
import { ProgressBar as PaperProgressBar } from 'react-native-paper'

const ProgressBar = (props) => {
  const { progress, color, loop, visible } = props

  let _progress = progress || 0.5
  let _color = color || 'teal'
  let _indeterminate = loop || false
  let _visible = visible || true

  return (
    <PaperProgressBar
      progress={_progress}
      color={_color}
      indeterminate={_indeterminate}
      visible={_visible}
      {...props}
    ></PaperProgressBar>
  )
}

export default ProgressBar
