import { requester } from "./requester"

export async function rateWorkout(id, rate) {
    const result = await requester(`http://localhost:3030/data/rate`, "POST", { id, rate })
    return result
}
export async function getAllRates(id) {
    const searchQuery = encodeURIComponent(`id="${id}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await requester(`http://localhost:3030/data/rate?where=${searchQuery}&load=${relationQuery}`, "GET");
    if(result.code === 404) return []
    return result
}