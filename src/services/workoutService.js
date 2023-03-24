import { requester } from "./requester"

export async function getAllWorkoutsByOwner(ownerId) {
    const data = await requester("http://localhost:3030/data/workout", "GET")
    const filteredData = data.filter(d => d._ownerId === ownerId)
    return filteredData
}