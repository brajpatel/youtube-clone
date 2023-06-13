import axios from "axios";

export const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        key:'AIzaSyDHUjA1MQve9v90Y5AkW1eGGET3JM2QyRk'
    }
})