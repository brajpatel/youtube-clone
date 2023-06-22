import { request } from "./request";

export const getVideoComments = async (videoId) => {
    const response = await request("/commentThreads", {
        params: {
            part: "snippet",
            videoId: videoId,
            order: "relevance"
        }
    })
    .catch((err) => {
        console.log(err);
    })

    return response.data.items;
}