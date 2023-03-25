import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { getAllWorkoutsByOwner } from '../../services/workoutService';
import { WorkoutListCard } from '../WorkoutList/WorkoutListCard/WorkoutListCard';
import styles from "./Profile.module.css"
export const Profile = () => {
    const { userEmail, userId } = useContext(AuthContext)
    const navigate = useNavigate()
    const checkAuth = () => {
        if (!userEmail) {
            navigate("/")
        }
    }
    const [usersWorkouts, setUserWorkouts] = useState([])
    useEffect(() => {
        checkAuth()
        getAllWorkoutsByOwner(userId)
            .then(data => setUserWorkouts(data))
    }, [])
    return (
        <Container style={{ minWidth: "70%", marginTop: "20px" }}>
            <Row>
                <Col>
                    <Image
                        src="https://via.placeholder.com/150"
                        roundedCircle
                        className="mb-3"
                    />
                    <h2>{userEmail?.split("@")[0]}'s Profile</h2>
                </Col>
                <Row xs={1} md={3} className={styles.row}>
                    {usersWorkouts.map(u => <WorkoutListCard key={u._id} {...u} />)}
                </Row>
            </Row>
        </Container>
    )
}
