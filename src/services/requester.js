export async function requester(url, method, data, token) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if (data) {
        options.body = JSON.stringify(data);
    }
    if (token) {
        options.headers["X-Authorization"] = token
    }
    const res = await fetch(url, options)
    if (!res.ok) {
        throw new Error("Request failed!")
    }
    return res.json()
}