import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { getAllWorkouts } from '../../services/workoutService'
import { WorkoutListCard } from './WorkoutListCard/WorkoutListCard'

export const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([])
    useState(() => {
        getAllWorkouts()
            .then(data => setWorkouts(data))
    }, [])
    return (

        <div style={{ padding: "72px", display: "flex", justifyContent: "center" }}>
            {workouts.map(u => <Row xs={1} md={3} className="g-3" style={{ width: "100%" }} key={u._id}>
                <WorkoutListCard key={u._id} {...u} />
            </Row>)}
            {workouts.length === 0 && <div>No Listings!</div>}

        </div >
    )
}
