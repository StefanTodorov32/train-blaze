import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { TrainingListCard } from './TrainingListCard'

export const TrainingList = () => {
    const [workouts, setWorkouts] = useState([])

    useState(() => {
        fetch("http://localhost:3030/jsonstore/workout")
        .then(res => res.json())
        .then(data => setWorkouts(Object.values(data)))
        .catch(e => console.error(e))
    }, [])

    console.log(workouts)
    return (

        <div style={{ padding: "72px", display: "flex", justifyContent: "center" }}>
            <Row xs={1} md={2} className="g-4">
                {workouts.map(u => <TrainingListCard key={u._id} {...u}/>)}
            </Row>
        </div>
    )
}
