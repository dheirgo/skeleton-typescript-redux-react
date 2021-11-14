import axios, { AxiosInstance } from 'axios';

const _axiosInstance: AxiosInstance = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL
});

function deleteRequest(route: string): Promise<any> {
    return _axiosInstance.delete(route).then(result => result.data);
}

function getRequest(route: string): Promise<any> {
    return _axiosInstance.get(route).then(result => result.data);
}

function postRequest(route: string, body: any): Promise<any> {
    return _axiosInstance.post(route, body).then(result => result.data);
}

function putRequest(route: string, body: any): Promise<any> {
    return _axiosInstance.put(route, body).then(result => result.data);
}

export {
    deleteRequest,
    getRequest,
    postRequest,
    putRequest
}
