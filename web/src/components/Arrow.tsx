type ArrowProps = {
  color?: 'blue' | 'green' | 'red' | 'yellow'
  width?: number
  height?: number
}

export const Arrow = ({ color = 'blue', width = 30, height = 24, ...rest }: ArrowProps) => {
  const className = (function getClass(color) {
    switch(color) {
      case 'green':
        return 'fill-mcl-green-900'
      case 'red':
        return 'fill-mcl-red-900'
      case 'yellow':
        return 'fill-mcl-yellow-900'
      default:
        return 'fill-mcl-blue-900'
    }
  })(color)

  return (
    <svg width={width} height={height} viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M28.5976 13.3242C29.4126 12.5918 29.4126 11.4023 28.5976 10.6699L18.1653 1.29492C17.3503 0.5625 16.0267 0.5625 15.2116 1.29492C14.3966 2.02734 14.3966 3.2168 15.2116 3.94922L22.0905 10.125H2.08647C0.932389 10.125 0 10.9629 0 12C0 13.0371 0.932389 13.875 2.08647 13.875H22.0839L15.2182 20.0508C14.4031 20.7832 14.4031 21.9727 15.2182 22.7051C16.0332 23.4375 17.3568 23.4375 18.1718 22.7051L28.6041 13.3301L28.5976 13.3242Z"
        className={className}
      />
    </svg>
  )
}
