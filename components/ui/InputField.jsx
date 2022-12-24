import classnames from "classnames"
import { Field } from "formik"

const variants = {
  primary: "border-slate-600 border-2 rounded-md",
}

const Input = (props) => {
  const { className, variant = "primary", label, ...otherProps } = props

  return (
    <div className="flex flex-col pt-2 px-4 w-5/6">
      <label className="pb-2 font-medium text-xl">{label}</label>
      <Field
        className={classnames(variants[variant], "py-2 px-2", className)}
        {...otherProps}
      />
    </div>
  )
}

export default Input
