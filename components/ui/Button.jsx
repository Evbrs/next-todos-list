import classnames from "classnames"

const variants = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-white text-black",
}

const sizes = {
  small: "py-1.5 px-2.5 text-sm",
  medium: "py-2.5 px-4.5 text-md",
}

const Button = (props) => {
  const {
    className,
    variant = "primary",
    size = "medium",
    ...otherProps
  } = props

  return (
    <button
      className={classnames(variants[variant], sizes[size], className)}
      {...otherProps}
    />
  )
}

export default Button
