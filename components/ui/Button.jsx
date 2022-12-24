import classnames from "classnames"

const variants = {
  primary: "text-black ",
  secondary: "bg-white text-black",
}

const sizes = {
  small: "py-1.5 px-2.5 text-sm",
  medium: "py-2.5 px-4.5 text-lg",
}

const Button = (props) => {
  const {
    className,
    variant = "primary",
    size = "medium",
    children,
    ...otherProps
  } = props

  return (
    <button
      className={classnames(variants[variant], sizes[size], className)}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
