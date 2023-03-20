import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
export const TrainingListCard = ({ workoutImage, workoutTitle, workoutDescription, _id }) => {
    return (
        <Col>
            <Card>
                <div style={{ display: "flex" }}>
                    <Card.Img variant="top" style={{ width: "100%", height: "400px", objectFit: "cover" }} src={workoutImage} />
                </div>
                <Card.Body>
                    <Card.Title>{workoutTitle}</Card.Title>
                    <Card.Text>
                        {workoutDescription}
                    </Card.Text>
                    <LinkContainer to={`/training-list/program/${_id}`}>
                        <Button variant="primary">Primary</Button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </Col>
    )
}
