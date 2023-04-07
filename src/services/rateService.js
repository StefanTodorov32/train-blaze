import { requester } from "./requester"
import { CONSTANTS } from "./index.js"
const url = `${CONSTANTS.baseUrl}/data/rate`

export async function rateWorkout(id, rate) {
    const result = await requester(url , "POST", { id, rate })
    return result
}
export async function getAllRates(id) {
    const searchQuery = encodeURIComponent(`id="${id}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await requester(`${url}?where=${searchQuery}&load=${relationQuery}`, "GET");
    if(result.code === 404) return []
    return result
}