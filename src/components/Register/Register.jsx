import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';
export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        email: "",
        password: "",
        rePassword: ""
    }, onRegisterSubmit)
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
            >
                <h1 style={{ textAlign: "center" }}>Register</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={changeHandler} value={values.email} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{ marginTop: "10px" }}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={changeHandler} value={values.password} />
                </Form.Group>
                <Form.Group controlId="formBasicRePassword">
                    <Form.Label style={{ marginTop: "10px" }}>Repeat Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="rePassword" onChange={changeHandler} value={values.rePassword} />
                </Form.Group>
                <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center", marginTop: "10px" }}>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Remember me"
                    />
                    <p>Already registered? <Link to="/auth/login" style={{ textDecoration: "none", color: "blue" }}>Login</Link></p>
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
