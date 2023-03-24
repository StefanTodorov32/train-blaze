import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
export const WorkoutListCard = ({ workoutImage, workoutTitle, workoutDescription, _id }) => {
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
                    <LinkContainer to={`/workout-list/workout/${_id}`}>
                        <Button variant="primary">Give it a go!</Button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </Col>
    )
}
