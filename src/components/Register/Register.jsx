import React, { useContext } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';
import styles from "./Register.module.css"
export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        email: "",
        imageUrl: "",
        password: "",
        rePassword: ""
    }, onRegisterSubmit)
    return (
        <div className={styles.wrapper}>
            <Form
                className={styles.form}
                onSubmit={onSubmit}
            >
                <h1 style={{ textAlign: "center" }}>Register</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={changeHandler} value={values.email} />
                </Form.Group>
                <Form.Group controlId="formBasicImageUrl">
                    <Form.Label>Profile Image</Form.Label>
                    <Form.Control type="imageUrl" placeholder="Enter image" name="imageUrl" onChange={changeHandler} value={values.imageUrl} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{ marginTop: "10px" }}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={changeHandler} value={values.password} />
                </Form.Group>
                <Form.Group controlId="formBasicRePassword">
                    <Form.Label style={{ marginTop: "10px" }}>Repeat Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="rePassword" onChange={changeHandler} value={values.rePassword} />
                </Form.Group>
                <div>
                    <p>Already registered? <Link to="/auth/login" style={{ textDecoration: "none", color: "blue" }}>Login</Link></p>
                </div>
                <Button variant="primary" type="submit" className={styles.btn}>
                    Login
                </Button>
            </Form>
        </div >
    )
}
