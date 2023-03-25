import React from 'react'
import { Alert } from 'react-bootstrap'
import styles from "./ErrorOverlay.module.css"
export const ErrorOverlay = ({ message, index }) => {
    const marginCalc = index * 80;
    return (
        <div className={styles.wrapper} style={{ marginTop: marginCalc + "px" }}>
            <Alert variant={"danger"}>
                {message}
            </Alert>
        </div>
    )
}
