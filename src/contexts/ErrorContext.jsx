import { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
    const [errorMessages, setErrorMessages] = useState([])

    const contextError = {
        errorMessages,
        setErrorMessages
    }
    return <>
        <ErrorContext.Provider value={contextError}>
            {children}
        </ErrorContext.Provider>
    </>
}