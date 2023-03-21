import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Row, Col, ListGroup, CloseButton } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const CreateProgram = () => {
    const navigate = useNavigate()
    const [program, setProgram] = useState({
        workoutImage: "",
        workoutTitle: "",
        workoutDescription: "",
        workoutExercises: [],
    })
    const handleInputProgramChange = (event) => {
        const { name, value } = event.target
        setProgram({ ...program, [name]: value })
    }
    const handleProgramSubmit = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3030/jsonstore/workout", program)
            .then(navigate("/training-list"))

    }

    const [newExercise, setNewExercise] = useState({ name: '', sets: '', reps: '', description: '', videoLink: "", videoImage: "" });
    const handleAddExercise = () => {
        const newExercises = [...program.workoutExercises, newExercise];
        if (newExercise.name.trim() == "" || newExercise.sets.trim() == "" || newExercise.reps.trim() == "" || newExercise.description.trim() == "" || newExercise.videoLink.trim() == "") {
            return alert("Empty Excercise fields!")
        }
        setProgram({ ...program, workoutExercises: newExercises })
        setNewExercise({ name: '', sets: '', reps: '', description: "", videoLink: "", videoImage: "" });
    };


    const handleInputExerciseChange = (event) => {
        const { name, value } = event.target;
        setNewExercise({ ...newExercise, [name]: value });
    };
    const handleDeleteExercise = (index) => {
        const updatedExercises = [...program.workoutExercises];
        updatedExercises.splice(index, 1);
        setProgram({ ...program, workoutExercises: updatedExercises });
    };


    return (
        <div style={{ margin: "30px", padding: "10px", border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: "20px", backgroundColor: "f2f2f2" }}>
            <Form onSubmit={handleProgramSubmit}>
                <Form.Group className="mb-3" controlId="formGridWorkoutImage">
                    <Form.Label>Workout Image</Form.Label>
                    <Form.Control
                        required
                        placeholder="Workout image"
                        name='workoutImage'
                        onChange={handleInputProgramChange}
                        value={program.workoutImage}
                    />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridWorkoutTitle">
                        <Form.Label>Workout Title</Form.Label>
                        <Form.Control
                            required
                            placeholder="Workout title"
                            name='workoutTitle'
                            onChange={handleInputProgramChange}
                            value={program.workoutTitle} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridWorkoutDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            placeholder="Workout description"
                            name='workoutDescription'
                            onChange={handleInputProgramChange}
                            value={program.workoutDescription}
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
                    {program.workoutExercises.map((exercise, index) => (
                        <ListGroup.Item style={{ margin: "0 0 20px 0" }} key={index}>
                            <Row>
                                <Col>
                                    <div>
                                        <Form.Label style={{ marginRight: "5px", fontWeight: "600" }}>Exercise Name:</Form.Label>
                                        {exercise.name}
                                    </div>
                                    <div style={{ wordWrap: "break-word", width: "400px" }}>
                                        <Form.Label style={{ marginRight: "5px", fontWeight: "600" }}>Exercise Description:</Form.Label>
                                        <p >
                                            {exercise.description}
                                        </p>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <Form.Label style={{ marginRight: "5px", fontWeight: "600" }}>Exercise Sets:</Form.Label>
                                        {exercise.sets}
                                    </div>
                                    <div>
                                        <Form.Label style={{ marginRight: "5px", fontWeight: "600" }}>Exercise Reps:</Form.Label>
                                        {exercise.reps}
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <Form.Label style={{ marginRight: "5px", fontWeight: "600" }}>Exercise Video Link:</Form.Label>
                                        {exercise.videoLink}
                                    </div>
                                    <div>
                                        <Form.Label style={{ marginRight: "5px", fontWeight: "600" }}>Exercise Video Image:</Form.Label>
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
                    Submit Program
                </Button>
            </Form>

        </div >
    )
}
