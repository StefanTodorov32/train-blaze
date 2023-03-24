import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import { getAllWorkoutsByOwner } from '../../services/workoutService';
import { WorkoutListCard } from '../WorkoutList/WorkoutListCard/WorkoutListCard';
export const Profile = () => {
    const { userEmail, userId } = useContext(AuthContext)
    const [usersWorkouts, setUserWorkouts] = useState([])
    useEffect(() => {
        getAllWorkoutsByOwner(userId)
            .then(data => setUserWorkouts(data))
    }, [])
    return (
        <Container>
            <Row>
                <Col>
                    <Image
                        src="https://via.placeholder.com/150"
                        roundedCircle
                        className="mb-3"
                    />
                    <h2>{userEmail}'s Profile</h2>
                </Col>
                <Row xs={1} md={3} style={{ display: "flex", flexDirection: "row" }}>
                    {usersWorkouts.map(u => <WorkoutListCard key={u._id} {...u} />)}
                </Row>
            </Row>
        </Container>
    )
}
