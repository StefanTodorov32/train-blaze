import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
    }
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
                onSubmit={handleSubmit}
            >
                <h1 style={{ textAlign: "center" }}>Register</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{ marginTop: "10px" }}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{ marginTop: "10px" }}>Repeat Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
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
