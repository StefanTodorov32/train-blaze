import React from 'react'
import { Card, Button } from 'react-bootstrap';
import styles from "./ExerciseCard.module.css"
import { VideoModal } from "./VideoModal/VideoModal"
import { useState } from 'react';
export const ExerciseCard = ({ name, description, videoLink, videoImage }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const embedId = videoLink.match(/(?<=v=)[^&\s]*/g)[0]
    return (
        <Card className={styles.card}>
            <Card.Img variant="top" src={videoImage} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                    How to do?
                </Button>
                <VideoModal handleShow={handleShow} name={name} embedId={embedId} handleClose={handleClose} show={show}></VideoModal>
            </Card.Body>
        </Card>
    )
}
