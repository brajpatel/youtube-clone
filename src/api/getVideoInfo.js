import { request } from "./request";

export const getVideoInfo = async (videoId) => {
    const response = await request("/videos", {
        params: {
            part: "snippet, contentDetails, statistics",
            id: videoId,
            type: "video",
            regionCode: "GB"
        }
    })
    .catch((err) => {
        console.log(err);
    });

    return response.data.items;
}