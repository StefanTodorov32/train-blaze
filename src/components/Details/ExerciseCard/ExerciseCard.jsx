import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { validationRegexes } from '../../../utils/errorUtils';
import styles from "./ExerciseCard.module.css"
import { VideoModal } from "./VideoModal/VideoModal"

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
                <VideoModal handleShow={handleShow} name={name} embedId={embedId} handleClose={handleClose} show={show} />
            </Card.Body>
        </Card>
    )
}
