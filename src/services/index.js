console.log()

export const CONSTANTS = {
    baseUrl : process.env.NODE_ENV === `development` ? "http://localhost:3030" : "https://train-blaze-server.onrender.com"
}