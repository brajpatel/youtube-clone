import { request } from "./request";

export const getPopularVideos = async () => {
    const response = await request("/videos", {
        params: {
            part: "snippet, contentDetails, statistics",
            chart: "mostPopular",
            regionCode: "GB",
            maxResults: 12,
            pageToken: ""
        },
    }).catch((err) => {
        console.log(err);
    })
    
    console.log(response.data.items);
    
    return response.data.items;
}