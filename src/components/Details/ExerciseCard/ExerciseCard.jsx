import React from 'react'
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { validationRegexes } from '../../../utils/errorUtils';
import styles from "./ExerciseCard.module.css"
import { VideoModal } from "./VideoModal/VideoModal"

export const ExerciseCard = ({ handleClose, handleShow, show, name, description, videoLink, videoImage }) => {
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
                <VideoModal />
            </Card.Body>
        </Card>
    )
}
