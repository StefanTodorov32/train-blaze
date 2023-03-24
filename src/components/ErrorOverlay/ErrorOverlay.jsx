import React from 'react'
import { Alert } from 'react-bootstrap'
export const ErrorOverlay = ({ message, index }) => {
    const marginCalc = index * 80;
    return (
        <div style={{ width: "400px", marginLeft: "20px", marginTop: marginCalc + "px" }}>
            <Alert variant={"danger"}>
                {message}
            </Alert>
        </div>
    )
}
