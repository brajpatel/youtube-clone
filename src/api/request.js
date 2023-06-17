import axios from "axios";

export const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        key:'AIzaSyC8fl6iHj7qyLBuy8sCu4Xr1taIxRqu8mg'
    }
})