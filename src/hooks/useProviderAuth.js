import { useEffect, useState } from "react"
import { login } from "../services/auth-service"

// Provider hook that creates auth object and handles state
const useProvideAuth = () => {
    const [user, setUser] = useState(null)

    // Wrap any Firebase methods we want to use making sure ...
    // ... to save the user to state.
    const signin = async ({email, password}) => {
        return await login({email, password})
    }

    const signup = (email, password) => {
        console.log("register")
    }
    const signout = () => {
        console.log("logout")
    }
    const sendPasswordResetEmail = (email) => {
        //
    }
    const confirmPasswordReset = (code, password) => {
        //
    }

    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.
    useEffect(() => {
        const unsubscribe = (user) => {
            console.log("unsubscribe")
            if (user) {
                setUser(user)
            } else {
                setUser(false)
            }
        }

        // Cleanup subscription on unmount
        return () => unsubscribe()
    }, [])

    // Return the user object and auth methods
    return {
        user,
        signin,
        signup,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset,
    }
}

export default useProvideAuth