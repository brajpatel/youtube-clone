import axios from "axios";

export const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        key:'AIzaSyCpxWdrUCQq-Th2WI5laYWzo30wpXWpt7k'
    }
})