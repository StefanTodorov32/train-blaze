import { useState } from "react"

export const useLocalStorage = (key) => {
    const [state, setState] = useState()

    const setLocalStorageState = (value) => {
        setState(value)

        localStorage.setItem(key, JSON.stringify(value))
    }

    return [
        state,
        setLocalStorageState
    ]
}