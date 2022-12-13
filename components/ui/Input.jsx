import classnames from "classnames"

const variants = {
  primary: "border-blue-600 border-2 rounded-md",
}

const Input = (props) => {
  const { className, variant = "primary", ...otherProps } = props

  return (
    <input
      className={classnames(variants[variant], className)}
      {...otherProps}
    />
  )
}

export default Input
