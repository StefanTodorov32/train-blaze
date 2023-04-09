import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Button, Table, Spinner } from 'react-bootstrap';
import { ExerciseCard } from './ExerciseCard/ExerciseCard';
import { Navigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import styles from "./Workout.module.css"
import { deleteWorkoutById, getWorkoutById } from '../../services/workoutService';
import RatingList from './RatingList/RatingList';
import RatingBadge from './RatingBadge/RatingBadge';
const Workout = () => {
    const { userId, token } = useContext(AuthContext)
    const [spinner, setSpinner] = useState(true)
    const { workoutId } = useParams()
    const [workout, setWorkout] = useState({})
    const [toNavigateDelete, setToNavigateDelete] = useState(false)
    const [toNavigateEdit, setToNavigateEdit] = useState(false)
    const [ratingsArray, setRatingArrays] = useState([])
    const [renderBadge, setRenderBadge] = useState(null)
    const [canRate, setCanRate] = useState(false)
    useEffect(() => {
        getWorkoutById(workoutId)
            .then(data => {
                setSpinner(false)
                setWorkout(data)
            })
        const a = ratingsArray.find(x => x._ownerId == userId)
        if (a) setCanRate(false); else setCanRate(true)
        if (workout._ownerId == userId) setCanRate(false)
    }, [])

    const handleDeleteWorkout = () => {
        deleteWorkoutById(workoutId, token)
            .then(setToNavigateDelete(true))
    }

    return (
        <div>
            {spinner &&
                <div className={styles.spinner}>
                    <Spinner animation="border" />
                </div>
            }
            {toNavigateDelete && <Navigate to="/workout-list" />}
            {toNavigateEdit && <Navigate to={`/workout-list/workout/${workoutId}/edit`} />}

            <Container className={styles.container}>
                <Row>
                    <Col style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <h1>{workout.workoutTitle}</h1>
                        <p>{workout.workoutDescription}</p>
                    </Col>
                    <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {userId == workout._ownerId ? <>
                            <Button variant="primary" style={{ marginRight: "10px" }} onClick={handleDeleteWorkout}>Delete</Button>
                            <Button variant="primary" style={{ marginRight: "10px" }} onClick={() => setToNavigateEdit(true)}>Edit</Button>
                        </> : ""}

                        {canRate && <RatingList setRenderBadge={setRenderBadge} id={workoutId} setRatingArrays={setRatingArrays} />}
                        <RatingBadge setCanRate={setCanRate} userId={userId} renderBadge={renderBadge} setRenderBadge={setRenderBadge} workoutId={workoutId} setRatingArrays={setRatingArrays} ratingsArray={ratingsArray} workout={workout} />
                    </div>
                </Row>
                <Row style={{ display: "flex", justifyContent: "space-between" }}>
                    {workout.workoutExercises?.map((w, i) => <ExerciseCard key={i} {...w} />)}
                </Row>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Table striped bordered hover style={{ margin: "16px" }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Exercise</th>
                                <th>Sets</th>
                                <th>Reps</th>
                            </tr>
                        </thead>
                        <tbody>
                            {workout.workoutExercises?.map((e, i) => <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.sets}</td>
                                <td>{e.reps}</td>
                            </tr>)}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    )
}
export default Workout