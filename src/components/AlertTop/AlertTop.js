import { useContext } from "react"
import Alert from "../Alert/Alert"
import alertContext from "../../contexts/alertContext"

const AlertTop = () => {
    const alert = useContext(alertContext)

    if (alert.isLoading) return <Alert color="yellow">Cargando ...</Alert>
    if (alert.error) return <Alert color="red">{alert.message}</Alert>
}

export default AlertTop