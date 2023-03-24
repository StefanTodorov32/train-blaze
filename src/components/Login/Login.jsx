import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        email: "",
        password: ""
    }, onLoginSubmit)
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "calc(100vh - 63px)"
        }}>
            <Form style={{
                width: '520px',
                backgroundColor: ' #ffffff',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',

            }}
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
                <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center", marginTop: "10px" }}>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Remember me"
                    />
                    <p>Don't have an account? <Link to="/auth/register" style={{ textDecoration: "none", color: "blue" }}>Register</Link></p>
                </div>
                <Button variant="primary" type="submit" style={{
                    backgroundColor: "#007bff",
                    border: "none",
                    width: "100%",
                }}>
                    Login
                </Button>
            </Form>
        </div >
    )
}
