import { useField } from "formik"
import "./input-goal.css"

const InputGoal = ({ ...props }) => {
    const [field, meta] = useField(props)

    return (
        <input className={meta.touched && meta.error ? 'error' : null} {...field} {...props} type="number"/>
    )
}

export default InputGoal