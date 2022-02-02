import { AxiosResponse } from "axios";
export interface IBusiness {
    "id"?: string,
    "alias": string,
    "name"?: string,
    "image_url": string,
    "is_closed": boolean,
    "url": string,
    "categories"?:[
        {
            "alias": string,
            "title": string
        },
        {
            "alias": string,
            "title": string
        },
        {
            "alias": string,
            "title": string
        }
    ],
        "rating": number,
        "coordinates"?:{
           "latitude": number,
           "longitude": number
        },
        "location"?:{
           "address1": string,
           "address2": string | null,
           "address3": string | null,
           "city": string,
           "zip_code": string,
           "country": string,
           "state": string,
           "display_address": string[]
        },
        "distance"?: number
}

export default interface IBusinessResponse {
    "data": IBusiness[];
 }