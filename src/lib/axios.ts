import axios from "axios";

const Headers = {
    Accept: 'application/json',
    "Content-Type": "application/json",
    "Chace-Control": "no-cache",
    Expires:0,
};

const Instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: Headers,
    timeout: 60 * 1000,
});

Instance.interceptors.request.use(
    async (request) => {
        return request
    },
    (error) => {
        return Promise.reject(error);
    }
)

Instance.interceptors.response.use(
    (response) => response,
    (error) =>  Promise.reject(error)
);

export default Instance;