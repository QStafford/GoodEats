export type Error = {
    status?: number;
    message?: string;
}

export interface IPost {

    "id": number,
    "title": string,
    "photo": string,
    "content": string,
    "userid": number,
    "username": string,
    "restaurantid": number,
    "restaurantname": string,
    "tags": string,
    "_created": Date

}