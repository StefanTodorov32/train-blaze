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
    const serializedAuth = localStorage.getItem('auth');
    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth);

        if (auth.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': auth.accessToken,
            };
        }
    }
    const res = await fetch(url, options)
    if (!res.ok) {
        throw new Error("Request failed!")
    }
    if (res.status === 204) {
        return {}
    }

    return res.json()
}