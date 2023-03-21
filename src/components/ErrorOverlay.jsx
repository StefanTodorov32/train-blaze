import React from 'react'
import { Modal, Container } from 'react-bootstrap';
export const ErrorOverlay = ({ message }) => {
    return (
        <Modal show={true}>
            <Modal.Header>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <p>{message}</p>
                </Container>
            </Modal.Body>
        </Modal>
    )
}
