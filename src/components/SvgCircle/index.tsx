import React from 'react'

import Svg, { Circle } from 'react-native-svg'

export function SvgCircle() {
  return (
    <Svg height="256" width="256">
      <Circle cx="128" cy="128" r="128" fill="orangered" />
    </Svg>
  )
}
