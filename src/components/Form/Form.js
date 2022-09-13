import { Form, Formik } from "formik"

const FormComponent = ({initialValues, validate, onSubmit, children}) => {
    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
        >
            <Form>
                {children}
            </Form>
        </Formik>
    )
}

export default FormComponent