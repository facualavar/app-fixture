import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Box from "../../components/Box/Box"
import Button from "../../components/Button/Button"
import FormComponent from "../../components/Form/Form"
import InputForm from "../../components/Form/InputForm/InputForm"
import Logo from "../../components/Logo/Logo"
import alertContext from "../../contexts/alertContext"
import useAuth from "../../hooks/useAuth"

const Login = () => {
    const auth = useAuth();
    const alert = useContext(alertContext);
    const navigate = useNavigate()

    if (auth.user) {
        navigate('/')
    }

    const validateLogin = (values) => {
        const errors = {}

        if(!values.email) errors.email = "es requerido"
        if(!values.password) errors.password = "es requerido"

        return errors
    }

    const initialValues = {
        "email": "",
        "password": "",
    }

    const handleClickLogin = async (credentials) => {
        alert.showAlertLoading()
        let {response, error} = await auth.signin(credentials)
        alert.hideAlertLoading()

        if (!error) {
            navigate('/')
            alert.hideAlertError()
        } else {
            alert.showAlertError(error)
        }
    }

    return (
        <Box display="flex" justifyContent="center">
            <Box padding="20px" backgroundColor="#fff" marginTop="50px" borderRadius="10px">
                <Logo />
                <FormComponent
                    initialValues={initialValues}
                    validate={validateLogin}
                    onSubmit={handleClickLogin}
                >
                    <InputForm label="Email" type="text" name="email"/>
                    <InputForm label="Password" type="password" name="password"/>
                    <Box display="flex" justifyContent="center">
                        <Button type="submit">Ingresar</Button>
                    </Box>
                </FormComponent>
            </Box>
        </Box>
    )
}

export default Login