import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import styles from "./Login.module.css"
export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        email: "",
        password: ""
    }, onLoginSubmit)
    return (
        <div className={styles.wrapper}>
            <Form
                className={styles.form}
                onSubmit={onSubmit}
                method="POST"
            >
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' onChange={changeHandler} value={values.email} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{ marginTop: "10px" }}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' onChange={changeHandler} value={values.password} />
                </Form.Group>
                <div >
                    <p>Don't have an account? <Link to="/auth/register" style={{ textDecoration: "none", color: "blue" }}>Register</Link></p>
                </div>
                <Button variant="primary" type="submit" className={styles.btn}>
                    Register
                </Button>
            </Form>
        </div >
    )
}
