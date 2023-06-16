import { request } from "./request";

export const getSearchResults = async (input) => {
    const response = await request("/search", {
        params: {
            part: "snippet",
            q: input,
            type: "video",
            regionCode: "GB",
            maxResults: 10
        }
    })
    .catch((err) => {
        console.log(err);
    })

    return response.data.items;
}