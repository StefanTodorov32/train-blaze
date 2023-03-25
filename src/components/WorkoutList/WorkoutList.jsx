import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { WorkoutListCard } from './WorkoutListCard/WorkoutListCard'

export const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([])

    useState(() => {
        fetch("http://localhost:3030/data/workout")
            .then(res => res.json())
            .then(data => setWorkouts(data))
            .catch(e => console.error(e))
    }, [])
    return (

        <div style={{ padding: "72px", display: "flex", justifyContent: "center" }}>
            {workouts?.code == 404 ?
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <h1>No listed Workouts!</h1>
                    <h2>Create an <Link to="/auth/login" style={{ textDecoration: "none", color: "lightblue" }}>account</Link> to post!</h2>
                    <iframe src="https://giphy.com/embed/Up0tbonVHG7UNOQAmu" width="480" height="480" style={{ borderRadius: "20px" }} ></iframe>
                </div> :
                <Row xs={1} md={3} className="g-3" style={{width: "100%"}}>
                    {workouts.map(u => <WorkoutListCard key={u._id} {...u} />)}
                </Row>}

        </div >
    )
}
