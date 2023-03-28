import { useState } from "react"

export const useLocalStorage = (key, inititalValue) => {
    const [state, setState] = useState(() => {
        const stringifiedState = localStorage.getItem(key)
        if (stringifiedState) {
            const objectState = JSON.parse(stringifiedState)
            return objectState
        }
        return inititalValue
    })

    const setLocalStorageState = (value) => {
        setState(value)
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [
        state,
        setLocalStorageState
    ]
}