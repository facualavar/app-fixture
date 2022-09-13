import { useField } from "formik"
import styled from "styled-components"
import Box from "../../Box/Box"
import Input from "../../Input/Input"

const Label = styled.label`
    color: #640F21;
    font-weight: 700;
`

const InputForm = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <Box paddingBottom="20px">
            <Label>{label}</Label>
            <Input error={meta.touched && meta.error ? true : false} {...field} {...props}/>
            {meta.touched && meta.error ?<Box color="#dc3545"><small>{label} {meta.error}</small></Box> : null}
        </Box>
    )
}

export default InputForm