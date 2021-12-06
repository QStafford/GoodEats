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

export interface IRestaurant {
    
    "id": number;
    "restaurantname": string;
    "restauranttype": string;
    "locationid": number;
    "_created": Date;

}

export interface IUser {
    
    "id": number;
    "name": string;
    "username": string;
    "email": string;
    "_created": Date;

}

export interface ITag {

    "id": number;
    "name": string;
}