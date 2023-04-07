import { requester } from "./requester"
import { CONSTANTS } from "./index"
const url = `${CONSTANTS.baseUrl}/data/workout`
export async function getAllWorkoutsByOwner(ownerId) {
    const data = await requester(url, "GET")
    const filteredData = data.filter(d => d._ownerId === ownerId)
    return filteredData
}

export async function getWorkoutById(workoutId) {
    const data = await requester(`${url}/${workoutId}`, "GET")
    return data
}

export async function deleteWorkoutById(workoutId) {
    const data = await requester(`${url}/${workoutId}`, "DELETE", null)
    return data
}

export async function getAllWorkouts() {
    const data = await requester(url, "GET")
    if (data.code === 404) {
        return []
    }
    return data
}

export async function editWorkoutById(workoutId, workout) {
    const data = await requester(`${url}/${workoutId}`, "PUT", workout)
    return data
}

export async function postWorkout(workout) {
    const data = await requester(`${url}`, "POST", workout)
    return data
}
