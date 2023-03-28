import React, { useState } from 'react'
import { Button, Form, Row, Col, ListGroup, CloseButton } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { handleErrorMessages, validationRegexes } from '../../utils/errorUtils'
import styles from "./CreateWorkout.module.css"
import { ErrorContext } from '../../contexts/ErrorContext'
import { postWorkout } from '../../services/workoutService'
export const CreateWorkout = () => {
    const { token } = useContext(AuthContext)
    const { setErrorMessages } = useContext(ErrorContext)
    const navigate = useNavigate()
    const [workout, setWorkout] = useState({
        workoutImage: "",
        workoutTitle: "",
        workoutDescription: "",
        workoutExercises: [],
    })
    const handleInputWorkoutChange = (event) => {
        const { name, value } = event.target
        setWorkout({ ...workout, [name]: value })
    }
    const handleWorkoutSubmit = async (event) => {
        event.preventDefault()
        await postWorkout(workout, token)
        navigate("/workout-list")
    }

    const [newExercise, setNewExercise] = useState({ name: '', sets: '', reps: '', description: '', videoLink: "", videoImage: "" });
    const handleAddExercise = () => {
        const newExercises = [...workout.workoutExercises, newExercise];
        if (newExercise.name.trim() == "" || newExercise.sets.trim() == "" || newExercise.reps.trim() == "" || newExercise.description.trim() == "" || newExercise.videoLink.trim() == "") {
            return alert("Empty Excercise fields!")
        }
        if (!validationRegexes.imageUrl.test(newExercise.videoImage)) {
            return handleErrorMessages(setErrorMessages, "Invalid Exercise ImageUrl!")
        }
        if (!validationRegexes.youtubeUrl.test(newExercise.videoLink)) {
            return handleErrorMessages(setErrorMessages, "Invalid Exercise Youtube Link!")
        }
        setWorkout({ ...workout, workoutExercises: newExercises })
        setNewExercise({ name: '', sets: '', reps: '', description: "", videoLink: "", videoImage: "" });
    };
    const handleInputExerciseChange = (event) => {
        const { name, value } = event.target;
        setNewExercise({ ...newExercise, [name]: value });
    };
    const handleDeleteExercise = (index) => {
        const updatedExercises = [...workout.workoutExercises];
        updatedExercises.splice(index, 1);
        setWorkout({ ...workout, workoutExercises: updatedExercises });
    };
    return (
        <div className={styles.wrapper}>
            <Form onSubmit={handleWorkoutSubmit}>
                <Form.Group className="mb-3" controlId="formGridWorkoutImage">
                    <Form.Label>Workout Image</Form.Label>
                    <Form.Control
                        required
                        placeholder="Workout image"
                        name='workoutImage'
                        onChange={handleInputWorkoutChange}
                        value={workout.workoutImage}
                    />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridWorkoutTitle">
                        <Form.Label>Workout Title</Form.Label>
                        <Form.Control
                            required
                            name='workoutTitle'
                            onChange={handleInputWorkoutChange}
                            placeholder="Workout title"
                            value={workout.workoutTitle} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridWorkoutDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            placeholder="Workout description"
                            name='workoutDescription'
                            onChange={handleInputWorkoutChange}
                            value={workout.workoutDescription}
                        />
                    </Form.Group>
                </Row>

                <ListGroup>
                    <Row>
                        <Col>
                            <Form.Label>Exercise Name</Form.Label>
                            <Form.Control
                                placeholder="Exercise name"
                                name="name"
                                value={newExercise.name}
                                onChange={handleInputExerciseChange}
                            />
                            <Form.Label>Exercise description</Form.Label>

                            <Form.Control
                                placeholder="Description"
                                name="description"
                                value={newExercise.description}
                                onChange={handleInputExerciseChange}
                            />
                        </Col>
                        <Col>
                            <Form.Label>Exercise reps</Form.Label>

                            <Form.Control
                                placeholder="Reps"
                                name="reps"
                                value={newExercise.reps}
                                onChange={handleInputExerciseChange}
                            />
                            <Form.Label>Exercise sets</Form.Label>

                            <Form.Control
                                placeholder="Sets"
                                name="sets"
                                value={newExercise.sets}
                                onChange={handleInputExerciseChange}
                            />
                        </Col>
                        <Col>
                            <Form.Label>Exercise video</Form.Label>

                            <Form.Control
                                placeholder="Video Link"
                                name="videoLink"
                                value={newExercise.videoLink}
                                onChange={handleInputExerciseChange}
                            />
                            <Form.Label>Exercise Image</Form.Label>

                            <Form.Control
                                placeholder="Video Image"
                                name="videoImage"
                                value={newExercise.videoImage}
                                onChange={handleInputExerciseChange}
                            />
                        </Col>
                        <div style={{ margin: "10px 0 10px 0" }}>
                            <Button variant="primary" onClick={handleAddExercise}>
                                Add Exercise
                            </Button>
                        </div>
                    </Row>
                </ListGroup>
                <ListGroup>
                    {workout.workoutExercises.map((exercise, index) => (
                        <ListGroup.Item className={styles.workoutList} key={index}>
                            <Row>
                                <Col>
                                    <div>
                                        <Form.Label className={styles.formLabel}>Exercise Name:</Form.Label>
                                        {exercise.name}
                                    </div>
                                    <div className={styles.descriptionExercise}>
                                        <Form.Label className={styles.formLabel}>Exercise Description:</Form.Label>
                                        <p >
                                            {exercise.description}
                                        </p>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <Form.Label className={styles.formLabel}>Exercise Reps:</Form.Label>
                                        {exercise.reps}
                                    </div>
                                    <div>
                                        <Form.Label className={styles.formLabel}>Exercise Sets:</Form.Label>
                                        {exercise.sets}
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <Form.Label className={styles.formLabel}>Exercise Video Link:</Form.Label>
                                        {exercise.videoLink}
                                    </div>
                                    <div>
                                        <Form.Label className={styles.formLabel}>Exercise Video Image:</Form.Label>
                                        {exercise.videoImage}
                                    </div>
                                </Col>
                                <Col>
                                    <CloseButton onClick={() => handleDeleteExercise(index)} />
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <Button variant="primary" type="submit">
                    Submit Workout
                </Button>
            </Form>

        </div >
    )
}
