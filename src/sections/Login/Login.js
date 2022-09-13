import Box from "../../components/Box/Box"
import Button from "../../components/Button/Button"
import FormComponent from "../../components/Form/Form"
import InputForm from "../../components/Form/InputForm/InputForm"
import Logo from "../../components/Logo/Logo"

const Login = () => {
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

    const handleClickLogin = async (data) => {
        console.log(data)
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
                        <Button type="submit">Login</Button>
                    </Box>
                </FormComponent>
            </Box>
        </Box>
    )
}

export default Login