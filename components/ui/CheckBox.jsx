import classnames from "classnames"

const CheckBox = (props) => {
  const { className, ...otherProps } = props

  return (
    <input
      type="checkbox"
      className={classnames("", className)}
      {...otherProps}
    />
  )
}

export default CheckBox
