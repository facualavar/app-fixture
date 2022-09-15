import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Box from "../../components/Box/Box"
import Button from "../../components/Button/Button"
import FormComponent from "../../components/Form/Form"
import InputForm from "../../components/Form/InputForm/InputForm"
import Logo from "../../components/Logo/Logo"
import alertContext from "../../contexts/alertContext"
import useAuth from "../../hooks/useAuth"

const Register = () => {
    const auth = useAuth();
    const alert = useContext(alertContext);
    const navigate = useNavigate()

    if (auth.user) {
        navigate('/')
    }

    const validateRegister = (values) => {
        const errors = {}

        if(!values.name) errors.name = "es requerido"
        if(!values.email) errors.email = "es requerido"
        if(!values.password) errors.password = "es requerido"

        return errors
    }

    const initialValues = {
        "name": "",
        "email": "",
        "password": "",
    }

    const handleClickRegister = async (data) => {
        alert.showAlertLoading()
        let {response, error} = await auth.signup(data)
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
                    validate={validateRegister}
                    onSubmit={handleClickRegister}
                >
                    <InputForm label="Nombre" type="text" name="name"/>
                    <InputForm label="Email" type="email" name="email"/>
                    <InputForm label="Password" type="password" name="password"/>
                    <Box display="flex" justifyContent="center">
                        <Button type="submit">Registrarse</Button>
                    </Box>
                </FormComponent>
            </Box>
        </Box>
    )
}

export default Register