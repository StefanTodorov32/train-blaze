import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Button, Table, Spinner } from 'react-bootstrap';
import { ExerciseCard } from './ExerciseCard/ExerciseCard';
import { Navigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import styles from "./Workout.module.css"
const Workout = () => {
    const { userId, token } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const [spinner, setSpinner] = useState(true)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { workoutId } = useParams()
    const [workout, setWorkout] = useState({})
    const [toNavigateDelete, setToNavigateDelete] = useState(false)
    const [toNavigateEdit, setToNavigateEdit] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:3030/data/workout/${workoutId}`, {
            method: "GET",
            header: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                setSpinner(false)
                setWorkout(data)
            })
            .catch(error => console.log(error));
    }, [])

    const handleDeleteWorkout = () => {
        fetch(`http://localhost:3030/data/workout/${workoutId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": token
            }
        })
            .then(setToNavigateDelete(true))
    }
    console.log(workout)
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
                    {userId == workout._ownerId ? <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button variant="primary" style={{ marginRight: "10px" }} onClick={handleDeleteWorkout}>Delete</Button>
                        <Button variant="primary" onClick={() => setToNavigateEdit(true)}>Edit</Button>
                    </div> : null}

                </Row>
                <Row style={{ display: "flex", justifyContent: "space-between" }}>
                    {workout.workoutExercises?.map(w => <ExerciseCard key={w._id} {...w} handleClose={handleClose} handleShow={handleShow} show={show} />)}
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