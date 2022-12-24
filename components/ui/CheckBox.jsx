import classnames from "classnames"

const CheckBox = (props) => {
  const { className, ...otherProps } = props
  return (
    <>
      <input
        type="checkbox"
        className={classnames(
          "mt-1 appearance-none w-4 h-4 border-2 border-slate-500 bg-white checked:bg-green-300",
          className
        )}
        {...otherProps}
      />
    </>
  )
}

export default CheckBox
