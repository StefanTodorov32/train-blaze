import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button, Table, Modal, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ExerciseCard } from './ExerciseCard';
import axios from 'axios';
const Workout = () => {
    const [show, setShow] = useState(false);
    const [spinner, setSpinner] = useState(true)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { programId } = useParams()
    const [workout, setWorkout] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3030/jsonstore/workout/${programId}`)
            .then(data => {
                setSpinner(false)
                setWorkout(data.data)
            })
            .catch(error => console.log(error));
    }, [])
    

    return (
        <div>
            {spinner &&
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px" }}>
                    <Spinner animation="border" />
                </div>
            }


            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col>
                        <h1>{workout.workoutTitle}</h1>
                        <p>{workout.workoutDescription}</p>
                    </Col>
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
                                <td>{i}</td>
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