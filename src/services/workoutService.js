import { requester } from "./requester"

export async function getAllWorkoutsByOwner(ownerId) {
    const data = await requester("http://localhost:3030/data/workout", "GET")
    const filteredData = data.filter(d => d._ownerId === ownerId)
    return filteredData
}

export async function getWorkoutById(workoutId) {
    const data = await requester(`http://localhost:3030/data/workout/${workoutId}`, "GET")
    return data
}

export async function deleteWorkoutById(workoutId) {
    const data = await requester(`http://localhost:3030/data/workout/${workoutId}`, "DELETE", null)
    return data
}

export async function getAllWorkouts() {
    const data = await requester(`http://localhost:3030/data/workout/`, "GET")
    if (data.code === 404) {
        return []
    }
    return data
}

export async function editWorkoutById(workoutId, workout) {
    const data = await requester(`http://localhost:3030/data/workout/${workoutId}`, "PUT", workout)
    return data
}

export async function postWorkout(workout) {
    const data = await requester(`http://localhost:3030/data/workout`, "POST", workout)
    return data
}
