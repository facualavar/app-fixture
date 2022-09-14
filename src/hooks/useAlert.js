import { useState } from "react"

const useAlert = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")

    const showAlertLoading = () => {
        setIsLoading(true)
    }
    const hideAlertLoading = () => {
        setIsLoading(false)
    }

    const showAlertError = (messageError) => {
        setError(true)
        setMessage(messageError)
    }
    const hideIsLoading = () => {
        setError(false)
        setMessage("")
    }

    return {
        showAlertLoading,
        hideAlertLoading,
        showAlertError,
        hideIsLoading,
        isLoading,
        error,
        message,
    }
}

export default useAlert