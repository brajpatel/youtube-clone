import axios from "axios";

export const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        key:'AIzaSyB68oXZdXSwd-x5Eiw8320Y3HYC2iib_-0'
    }
})