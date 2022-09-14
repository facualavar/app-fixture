import useProvideAuth from "../hooks/useProviderAuth";
import authContext from "../contexts/authContext"

const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export default ProvideAuth