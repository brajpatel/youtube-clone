import { request } from "./request";

export const getPopularVideos = async () => {
    const response = await request("/videos", {
        params: {
            part: "snippet, contentDetails, statistics",
            chart: "mostPopular",
            regionCode: "GB",
            maxResults: 20
        },
    }).catch((err) => {
        console.log(err);
    })
    
    return response.data.items;
}