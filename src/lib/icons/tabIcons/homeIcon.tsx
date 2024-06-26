import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

interface HomeProps extends SvgProps {
  color?: string
}

export const HomeIcon = ({ color = '#fff', ...props }: HomeProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M17.932 5.429a5.183 5.183 0 0 1 5.86 1.22l9.817 10.516A5.186 5.186 0 0 1 35 20.7v11.283A3.016 3.016 0 0 1 31.983 35H8.017A3.016 3.016 0 0 1 5 31.983V20.701c0-1.312.496-2.576 1.39-3.535l9.817-10.517a5.187 5.187 0 0 1 1.725-1.22ZM20 6.665a3.516 3.516 0 0 0-2.573 1.12L7.61 18.3a3.518 3.518 0 0 0-.943 2.399v11.283a1.35 1.35 0 0 0 1.35 1.35H15v-9.166c0-.62.204-1.237.6-1.712.4-.48.979-.788 1.622-.788h5.556c.643 0 1.222.308 1.622.788.396.475.6 1.093.6 1.712v9.166h6.983a1.35 1.35 0 0 0 1.35-1.35V20.7c0-.89-.336-1.747-.942-2.398L22.574 7.785A3.521 3.521 0 0 0 20 6.665Zm-2.778 16.668c-.093 0-.22.044-.342.189a1.02 1.02 0 0 0-.213.645v9.166h6.666v-9.166c0-.265-.089-.496-.213-.645-.121-.145-.249-.189-.342-.189h-5.556Z"
      clipRule="evenodd"
    />
  </Svg>
)
