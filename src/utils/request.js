import axios from "axios";
import { API_URL } from "./config";

const instance = axios.create({
    baseURL: `${API_URL}`,
    headers: {'Content-Type': 'application/json;charset=utf-8', 'Access-Control-Allow-Origin': true},
    timeout: 30000
})

instance.interceptors.response.use(
    (response) => {
        return Promise.resolve(response.data);
    }, (error) => {
        return error;
    }
)

export default async function request(option) {
    option = option || {};
    return instance({
        ...option
    })
}

