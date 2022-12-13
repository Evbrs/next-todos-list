const Icon = (props) => {
  const {
    className,
    strokeLinecap = "round",
    strokeLinejoin = "round",
    d,
    ...otherProps
  } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d strokeLinejoin strokeLinecap />
    </svg>
  )
}

export default Icon
