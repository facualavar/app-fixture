import { Form as FormFormik, Formik } from "formik"

const Form = ({initialValues, validate, onSubmit, children}) => {
    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
        >
            <FormFormik>
                {children}
            </FormFormik>
        </Formik>
    )
}

export default Form