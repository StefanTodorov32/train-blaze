import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { getAllWorkoutsByOwner } from '../../services/workoutService';
import { WorkoutListCard } from '../WorkoutList/WorkoutListCard/WorkoutListCard';
import styles from "./Profile.module.css"
export const Profile = () => {
    const { userEmail, userId, imageUrl } = useContext(AuthContext)
    const navigate = useNavigate()
    const checkAuth = () => {
        if (!userEmail) {
            navigate("/")
        }
    }
    const [userWorkouts, setUserWorkouts] = useState([])
    useEffect(() => {
        checkAuth()
        getAllWorkoutsByOwner(userId)
            .then(data => setUserWorkouts(data))
    }, [])
    return (
        <Container style={{ minWidth: "70%", marginTop: "20px", height: "980px" }}>
            <Row>
                <Col>
                    <Image
                        src={imageUrl}
                        width="100px"
                        height="100px"
                        roundedCircle
                        className="mb-3"
                    />
                    <h2>{userEmail?.split("@")[0]}'s Profile</h2>
                </Col>
                <Row xs={1} md={3} className={styles.row}>
                    {userWorkouts.map(u => <WorkoutListCard key={u._id} {...u} />)}
                </Row>
                {userWorkouts.length === 0 && <div className={styles.noWorkouts}><h2>User doesn't have own workouts!</h2></div>}
            </Row>
        </Container>
    )
}
